import { fetchClient, fetchClientBySlug } from '@/libs/data';
import Image from 'next/image';
import Link from 'next/link';
import { DeletePost, EditPost } from '../button/button';

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Post({ searchParams }: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const query = searchParams?.q ?? '';
  const clients = query ? await fetchClientBySlug(query) : await fetchClient();

  return (
    <>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {clients.map((post) => (
        <div
          key={post.slug}
          className="relative bg-neutral-100 p-6 shadow-md rounded-lg border-1 border-gray-800"
        >
          <Link href={`/blogs/${post.slug}`}>
            <div>
              <Image
                src={post.image_url}
                alt={post.title}
                width={180}
                height={100}
                className="w-[180px] h-[100px]  object-contain rounded-sm"
              />
              <div className="grid gap-3 mt-5">
                <h2 className="text-base/6 font-bold">{post.title}</h2>
                <p className="text-xs text-gray-600">
                  {new Date(post.date).toDateString()}
                </p>
                <p className="text-sm/6 text-gray-800">{post.summary}</p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col items-start justify-center gap-0 mt-4">
            {post.tags.map((tag) => (
              <button
                key={tag}
                className="text-[10px] font-extrabold text-nowrap text-gray-600 hover:text-gray-700/50 transition-all"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="absolute top-1 right-1 flex items-end gap-2">
            <EditPost post={post} />
            <DeletePost id={post.id} />
          </div>
        </div>
      ))}
     
      </div>
       {clients.length === 0 && (
        <div className="h-44 flex items-center justify-center">
          <p className="text-lg font-bold text-center">No post found {query ? `for "${query}"` : ''}</p>
        </div>
      )}
    </>
  );
}
