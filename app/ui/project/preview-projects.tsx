// import { projects } from '@/libs/placeholder-data';
import ViewMoreProject from './view-more-project';
import { ProjectsSkeleton } from '../skeleton/skeletons';
import { Suspense } from 'react';
import PreviewProject from '../project/preview-projects-async';


export default function Projects() {

  return (
    <section className="px-4 py-26 lg:p-8">
      <div className="w-[100%] m-auto lg:w-[75%]">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-extrabold capitalize">Recent projects</h1>
          <p className="w-[85%] sm:w-[80%] text-gray-400 text-center">
            Whether you have a mobile app idea that needs to come to life or a
            website that requires a facelift, I am here to turn your digital
            dreams into reality.
          </p>
        </div>
        <Suspense fallback={<ProjectsSkeleton />}>
         <PreviewProject isHome={true} />
        </Suspense>
      </div>
      <div className='w-[75%] mx-auto flex items-center justify-center py-8 mt-2'>
       <ViewMoreProject />
      </div>
    </section>
  );
}
