import { fetchClientBySlug } from '@/libs/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Post"
}


export default async function BlogPage(props : {params: Promise<{slug: string}>}) {
  
  const params = await props.params;

  const slug = params.slug;

  const clients = await fetchClientBySlug(slug);
  const post = clients[0];

  if (!post) {
    notFound();
  }

    return (
    <div className="py-8">
      <div className="w-[75%] mx-auto py-2 bg-neutral-100 shadow-lg rounded-lg">
        <Image
          src={post.image_url}  
          alt={post.title}
          width={180}
          height={180}
          className="object-cover mx-auto"
        />
        <div className="grid gap-3 px-1 sm:w-[75%] md:w-[75%] lg:w-[75%] mx-auto mt-4">
          <h2 className="text-lg lg:text-xl/7 font-semibold">{post.title}</h2>
          <p className="text-gray-600">{new Date(post.date).toDateString()}</p>
          <p className="text-lg/7 text-gray-800">{post.summary}</p>
          <p className="text-lg/7 text-gray-800">{post.content}</p>
          <div className="grid gap-3 my-1 lg:grid-cols-3">
            {post.tags.map((tag) => (
              <button key={tag} className="text-sm font-extrabold bg-neutral-200 text-gray-500 px-3 py-2 rounded-lg text-nowrap">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
