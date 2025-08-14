'use client';

import { updatePost, UpdatePostState } from "@/libs/action";
import { Client } from "@/libs/definitions";
import { useActionState } from "react";



export default function EditBlogPost({ post }: { post: Client }) {
    const updatePostWithId = updatePost.bind(null, post.id);
    const initialState: UpdatePostState = { message: null, errors: {} };
    const [state, formAction] = useActionState(updatePostWithId, initialState);

    return (
        <form action={formAction} className="space-y-6 bg-neutral-100 p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
            <div>
                <label htmlFor="title"
                    className="block text-x1 text-gray-600 capitalize"
                >title</label>
                <input
                    type="text"
                    name="title"
                    className="mt-2 w-full p-2 border-gray-600 outline-1 outline-green-600 rounded-md shadow-sm"
                    defaultValue={post.title} />
            </div>
            <div>
                {state.errors?.title && state.errors.title.map((error: string, index: number) => (
                    <p key={index} className="text-red-500">{error}</p>
                ))}
            </div>
            <div>
                <label
                    htmlFor="summary"
                    className="block text-x1 text-gray-600 capitalize"
                >Summary</label>
                <textarea
                    name="summary"
                    className="mt-2 w-full min-h-[100px] border-gray-600 p-2 rounded-md shadow-sm resize-none"
                    defaultValue={post.summary}></textarea>
            </div>
            <div>
                {state.errors?.summary && state.errors.summary.map((error: string, index: number) => (
                    <p key={index} className="text-red-500">{error}</p>
                ))}
            </div>
            <div>
                <label
                    htmlFor="content"
                    className="block text-x1 text-gray-600 capitalize"
                >Content</label>
                <textarea
                    name="content"
                    className="mt-2 w-full min-h-[200px] border-gray-600 p-2 rounded-md shadow-sm resize-none"
                    defaultValue={post.content}
                ></textarea>
            </div>
            <div>
                {state.errors?.content && state.errors.content.map((error: string, index: number) => (
                    <p key={index} className="text-red-500">{error}</p>
                ))}
            </div>
            <div>
            <button
                type="submit"
                className="w-full block bg-black text-white font-extrabold py-2 rounded-md shadow-lg hover:shadow-xl"
                >
                    Update post
                </button>
            </div>
           
        </form>
    )
}