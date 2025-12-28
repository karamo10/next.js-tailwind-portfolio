// import { clients } from "@/libs/placeholder-data";
import SearchInput from '../ui/blog/searchinput';
import CreatePostButton from '../ui/blog/btn-create-blog-post';
import Post from '../ui/blog/blog-post';
import { Suspense } from 'react';
import { PostsSkeleton } from '../ui/skeleton/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog"
}


export default async function BlogPages(props: { searchParams: Promise<{ q?: string }>; }) {
  const searchParams = await props.searchParams
  
  return (
    <section className="px-3 py-8 flex justify-center gap-4">
      <div className="  lg:w-[65%]">
        <div className="flex items-center justify-between mb-6">
          <CreatePostButton />
          <SearchInput />
        </div>
        <Suspense fallback={<PostsSkeleton />}>
          <Post searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
