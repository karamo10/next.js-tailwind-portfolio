// import { skills } from '@/libs/placeholder-data';
import { Suspense } from 'react';
import { SkillSkeleton } from '../skeleton/skeletons';
import SkillCardsAsync from './skillcardsasync';

export default async function Skills() {

  return (
    <section className="p-4 lg:p-8">
      <div className="w-[100%] m-auto text-center px-2 lg:w-[75%]">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-sm font-extrabold">my skills</h1>
          <h2 className="text-4xl font-extrabold">What I do</h2>
          <p className="w-[80%] text-gray-400">
            I&rsquo;m not just a developer; I&rsquo;m a digital dreamweaver.
            Crafting immersive online experiences is not just a job but my
            calling. Discover below how I can help you.
          </p>
        </div>
        <Suspense fallback={<SkillSkeleton />}>
           <SkillCardsAsync />
        </Suspense>
      </div>
    </section>
  );
}
