import PreviewProject from '../ui/project/preview-projects-async';
import { Suspense } from 'react';
import { ProjectsSkeleton } from '../ui/skeleton/skeletons';



export default function ProjectsFull() {

  return (
    <section className="pt-40">
      <div className="w-[70%] m-auto">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-extrabold text-center capitalize">All projects</h1>
          <p className="w-[85%] sm:w-[80%] text-gray-400 text-center">
            Whether you have a mobile app idea that needs to come to life or a
            website that requires a facelift, I am here to turn your digital
            dreams into reality.
          </p>
        </div>
        <Suspense fallback={<ProjectsSkeleton />}>
            <PreviewProject />
          </Suspense>
      </div>
      
    </section>
  );
}
