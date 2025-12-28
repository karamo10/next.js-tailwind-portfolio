// 'use client'
import EditBlogPost from "@/app/ui/blog/edit-blog-post";
import { fetchClientBySlug } from "@/libs/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit"
}


export default async function EditPage(props: {params: Promise<{slug: string}>}) {
    const params = await props.params
    const posts = await fetchClientBySlug(params.slug);
    const post = posts[0]

    return<EditBlogPost  post={post} />
}