// 'use client'
import EditBlogPost from "@/app/ui/blog/edit-blog-post";
import { fetchClientBySlug } from "@/libs/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit"
}


export default async function EditPage({ params }: { params: { slug: string } }) {
    console.log('params slug', params.slug);
    const posts = await fetchClientBySlug(params.slug);
    const post = posts[0]

    return<EditBlogPost  post={post} />
}