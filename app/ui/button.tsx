import { deletePost } from "@/libs/action";
import { Client } from "@/libs/definitions";
import { TrashIcon, PencilIcon } from "@heroicons/react/20/solid";
import Link from "next/link";



export function DeletePost({ id }: { id: number }) {
    const deletePostWIthId = deletePost.bind(null, id)

    return (
        <form action={deletePostWIthId}>
            <button type="submit" className="bg-red-500 rounded-md border p-1">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
            </button>
        </form>
    )
}

export function EditPost({post}: {post: Client}) {
    return (
        <Link href={`/blogs/${post.slug}/edit`}
            className="text-xs text-white font-medium bg-black/50 hover:bg-black/90 px-1 rounded-sm"
        >
            Edit post
        </Link>
    )
}