'use client';

import { FaceFrownIcon } from '@heroicons/react/20/solid';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex items-center justify-center max-h-min">
      <div className="h-[500px] flex flex-col items-center justify-center gap-3 pt-16">
      <FaceFrownIcon className='w-6 h-6' />
        <h2 className="text-sm text-black">Whoops! Somethng went wrong!</h2>
        <p className="text-xs text-gray-600">{error.message}</p>
      <button className="inline-block text-white text-xs font-medium bg-black py-1 px-3 hover:opacity-80 transition cursor-pointer" onClick={reset}>
        Try Again
      </button>
     </div>
    </main>
  );
}
