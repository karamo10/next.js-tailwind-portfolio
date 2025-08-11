import Link from 'next/link';
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/16/solid';

export default function Resume() {
  return (
    <section className='flex items-center justify-center min-h-[40vh] px-8 lg:p-8'>
      <div className="flex items-center w-[100%] gap-12 m-auto py-18 flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap lg:gap-0  lg:w-[75%]">
        <div className="">
          <h1 className="text-3xl font-extrabold mb-3.5">My Resume</h1>
          <p className="max-w-[95%] text-sm/5 text-gray-400 mb-3.5 lg:w-[50%] ">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs uppercase font-extralight px-4 py-2 rounded hover:bg-neutral-200 transition active:opacity-0 "
          >
            View more
            <ArrowLongRightIcon className="h-3 w-3" />
          </Link>
        </div>
        <div>
          <div className="flex gap-2.5 mb-4">
            <span className="bg-black p-1 h-[45px] rounded-md shadow-sm">
              <ChartBarIcon className="h-8.5 w-8 p-1 text-white" />
            </span>
            <p className="text-xs md:text-sm text-gray-400">
              Bachelor of Science in Computer Science
            </p>
          </div>
          <div className="flex gap-2.5 mb-4">
            <span className="bg-black p-1 h-[45px] rounded-md shadow-md">
              <PuzzlePieceIcon className="h-8.5 w-8 p-1 text-white" />
            </span>
            <p className="text-xs md:text-sm text-gray-400">
              Certified Web Developer
            </p>
          </div>
          <div className="flex gap-2.5">
            <span className="bg-black p-1 h-[45px] rounded-md shadow-md">
              <CursorArrowRaysIcon className="h-8.5 w-8 p-1 text-white" />
            </span>
            <p className="text-xs md:text-sm text-gray-400">
              Frontend Framework Proficiency Certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
