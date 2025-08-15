import EditBlogPost from '@/app/ui/blog/edit-blog-post';
import { fetchClientBySlug } from '@/libs/data';
import { Client } from '@/libs/definitions';

interface EditPageParams {
  params: { slug: string };
}

export default async function EditPage({ params }: EditPageParams) {
  const posts: Client[] = await fetchClientBySlug(params.slug);
  // const posts = await fetchClientBySlug(params.slug);

  const post = posts[0];

  return <EditBlogPost post={post} />;
}
