import EditBlogPost from "@/app/ui/blog/edit-blog-post";
import { fetchClientBySlug } from "@/libs/data";


export default async function EditPage({params}: {params: {slug: string}})  {
    const posts = await fetchClientBySlug(params.slug);
    const post = posts[0]

    return<EditBlogPost  post={post} />
}