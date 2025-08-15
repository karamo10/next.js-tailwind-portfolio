import EditBlogPost from "@/app/ui/blog/edit-blog-post";
import { fetchClientBySlug } from "@/libs/data";

type Props = {
    params: {slug: string}
}

export default async function EditPage({params}: Props)  {
    const posts = await fetchClientBySlug(params.slug);
    const post = posts[0]

    return<EditBlogPost  post={post} />
}