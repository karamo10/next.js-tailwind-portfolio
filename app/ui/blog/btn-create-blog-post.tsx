import { PlusIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function CreatePostButton() {
  return (
    <Link
      href={'/blogs/create'}
      className="flex items-center gap-1 bg-black text-white text-sm font-bold px-2 py-1.5 rounded-lg shadow-md"
    >
      Create post
      <PlusIcon className="h-6 w-6 text-white" />
    </Link>
  );
}
