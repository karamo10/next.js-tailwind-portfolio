'use server';

// import { Project } from "./definitions";
import {  z } from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import postgres from "postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


const sql = postgres(process.env.DATABASE_URL!, {ssl: 'require'})

const ContactFormSchema = z.object({
    name: z.string().min(1, {message: 'Firstname is required'}),
    email: z.string().email({message: 'Email is required'}),
    message: z.string().min(10, {message: 'Message is required (Minimum ten words)'})
})

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    },
    message?: string | null;
}


export async function handleFormSubmit(prevState: State, formData: FormData): Promise<State> {
    const raw = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    }

    const result = ContactFormSchema.safeParse(raw);

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
            message: 'Missing Field, Fail to Send Message'
        }
    }
    
    return {
        errors: {},
        message: 'Message successfully Sent!'
    }
}

// Now am connecting the auth logic with the signIn form. This 'authenticate' action will import the signIn function from the auth.ts
export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}


const BlogPostSchema = z.object({
    image_url: z.string().url({message: 'Image is required'}),
    title: z.string().min(5, {message: 'Title is required'}).max(45, 'Title is required(max 45 characters)'),
    date: z.string().date(),
    summary: z.string().min(50, {message: 'Summary is required(min 50 characters)'}),
    content: z.string().min(150, {message: 'Content is required(min 150 characters)'}),
    tags: z.array(z.string().min(1, {message: 'Tags are requred(min 1 tag)'}))
});

export type BlogPostState = {
    errors?: {
        image_url?: string[];
        title?: string[];
        date?: string[];
        summary?: string[];
        content?: string[];
        tags?: string[];
    }
    message?: string | null;
}

function generateSlug(title: string) {
    return title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')
}

export async function createPost(prevState: BlogPostState, formData: FormData): Promise<BlogPostState> {
    const validated = BlogPostSchema.safeParse({
        image_url: formData.get('image_url'),
        title: formData.get('title'),
        date: formData.get('date'),
        summary: formData.get('summary'),
        content: formData.get('content'),
        tags: formData.getAll('tags') as string[],
    });

    if (!validated.success) {
        return {
            errors: validated.error.flatten().fieldErrors,
            message: 'Validation failed'
        }
    }

    const { image_url, title, date, summary, content, tags } = validated.data;
    const slug = generateSlug(title);
    
    try {
        await sql`
        INSERT INTO clients (image_url, title, slug, date, summary, content, tags) 
        VALUES (${image_url}, ${title}, ${slug}, ${date}, ${summary}, ${content}, ${tags})
        `;
        revalidatePath('/blogs')
        redirect('/blogs')
    } catch (error) {
        console.error('Database Error:', error);
        return { message: 'Database Error' };
    }
    
}

// Summary on createPost
// When the user filled the create blog Form() and submit
// It runs the server action(formAction) formData.get('..') is called first to extract the form values, and then those extracted values are passed into the schema for validation. safeParse() runs the validation on the extracted data, if valid, it insert the data on the Database.

const updatePostSchema = z.object({
    title: z.string().min(5, { message: 'Title is required' }).max(45, 'Title is required(max 45 characters)'),
    summary: z.string().min(50, { message: 'Summary is required(min 50 characters)' }),
    content: z.string().min(150, {message: 'Content is required(min 150 characters)'}),
})

export type UpdatePostState = {
    errors?: {
        title?: string[];
        summary?: string[];
        content?: string[];
    }
    message?: string | null;
}

export async function updatePost(id: number, prevState: UpdatePostState, formData: FormData): Promise<UpdatePostState> {

    const validated = updatePostSchema.safeParse({
        title: formData.get('title'),
        summary: formData.get('summary'),
        content: formData.get('content'),
    }) 

    if (!validated.success) {
        return {
            errors: validated.error.flatten().fieldErrors,
            message: 'Validation Error'
        }
    }

    const { title, summary, content } = validated.data
    
    try {
        await sql`
        UPDATE clients 
        SET title = ${title}, summary = ${summary}, content = ${content}
        WHERE id = ${id}
        `;
    } catch (error) {
        console.log('failed to update post', error);
        return {
            message: 'Database Error: Failed to update post'
        }
    }
    revalidatePath('/blogs')
    redirect('/blogs')
}

export async function deletePost(id: number) {
    throw new Error('Failed to delete post')
    
    await sql`DELETE FROM clients WHERE id = ${id}`;
    revalidatePath('blogs');
}

