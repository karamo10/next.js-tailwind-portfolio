import Link from 'next/link';
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/16/solid';

export default function Resume() {
  return (
    <section className='py-20'>
      <div className="flex items-center w-[70%] m-auto py-18">
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold mb-3.5">My Resume</h1>
          <p className="w-[75%] text-xs/5 text-gray-400 mb-3.5">
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
        <div className="flex-1 pl-18">
          <div className="flex gap-2.5 mb-4">
            <span className="bg-black p-1 rounded shadow-black">
              <ChartBarIcon className="h-8.5 w-8 p-1 text-white" />
            </span>
            <p className="text-sm text-gray-400">
              Bachelor of Science in Computer Science
            </p>
          </div>
          <div className="flex gap-2.5 mb-4">
            <span className="bg-black p-1 rounded">
              <PuzzlePieceIcon className="h-8.5 w-8 p-1 text-white" />
            </span>
            <p className="text-sm text-gray-400">Certified Web Developer</p>
          </div>
          <div className="flex gap-2.5">
            <span className="bg-black p-1 rounded">
              <CursorArrowRaysIcon className="h-8.5 w-8 p-1 text-white" />
            </span>
            <p className="text-sm text-gray-400">
              Frontend Framework Proficiency Certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
