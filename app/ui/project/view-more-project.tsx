import { ArrowLongRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function ViewMoreProject() {
  return (
    <Link
      className="inline-flex items-center gap-1 bg-white uppercase text-black font-extralight text-xs px-4 py-2 rounded hover:bg-neutral-200 transition active:opacity-0"
      href={'/projects'}
    >
      View More Projects
      <ArrowLongRightIcon className="w-3 h-3" />
    </Link>
  );
}
