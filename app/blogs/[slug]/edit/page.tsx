import EditBlogPost from '@/app/ui/blog/edit-blog-post';
import { fetchClientBySlug } from '@/libs/data';
import { Client } from '@/libs/definitions';

type PageProps = {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function EditPage({ params }: PageProps) {
  const posts: Client[] = await fetchClientBySlug(params.slug);
  
  const post = posts[0];
  
  return <EditBlogPost post={post} />;
}
// const posts = await fetchClientBySlug(params.slug);
