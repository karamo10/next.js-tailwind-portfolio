import { fetchClient, fetchClientsByName } from '@/libs/data';
// import { clients } from "@/libs/placeholder-data";
import Image from 'next/image';
import Link from 'next/link';
import SearchInput from '../ui/searchinput';
import CreatePostButton from '../ui/btn-create-blog-post';
import { DeletePost, EditPost } from '../ui/button';



type Props = {        
  searchParams: {
    q?: string;
  }
}

export default async function BlogPages({ searchParams }: Props) {
  const query = searchParams?.q ?? '';
  const clients = query ? await fetchClientsByName(query) : await fetchClient();


  return (
    <section className="px-3 py-8">
      <div className="mx-auto  lg:w-[55%]">
        <div className="flex items-center justify-between mb-6">
          <CreatePostButton />
          <SearchInput />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {clients.map((post) => (
            <div
              key={post.slug}
              className="relative bg-neutral-100 p-8 shadow-md rounded-lg border-1 border-gray-800"
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
              <div className="grid gap-3 mt-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                {post.tags.map((tag) => (
                  <button
                    key={tag}
                    className="text-[10px] font-extrabold bg-neutral-200 text-gray-600 px-2 py-2 rounded-lg"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="absolute top-1 right-1 flex items-end gap-2">
                <EditPost post={post} />
                {/* <DeletePost id={post.id} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
