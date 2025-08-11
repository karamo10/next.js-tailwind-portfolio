'use client';
import {
  ArrowLongRightIcon,
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import { useActionState } from 'react';
import { authenticate } from '@/libs/action';
import { useSearchParams } from 'next/navigation';

export default function SignIn() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/blogs';
  const [erroMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className=" flex flex-col min-h-screen ">
      <div className=" bg-neutral-100 w-[375px] mr-auto ml-auto mt-48 px-8 py-8 rounded-lg ">
        <p className="text-xl">Please log in to continue.</p>
        <div className="mt-6">
          <div>
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <div className="relative mt-3">
              <input
                className="peer block  w-full py-2 px-10 border border-gray-400 focus:border-gray-900 placeholder:text-sm outline-none placeholder:text-gray-600  rounded"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none w-4 h-4 absolute left-3 top-1 translate-y-1/2 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative mt-3 ">
              <input
                className="peer block w-full py-2 px-10 border border-gray-400 focus:border-gray-900 placeholder:text-sm outline-none placeholder:text-gray-600 rounded"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none w-4 h-4 absolute left-3 top-1 translate-y-1/2 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          aria-disabled={isPending}
          className="w-full inline-flex items-center justify-between bg-black text-white text-sm font-extrabold mt-6 py-2 px-3 rounded-lg hover:opacity-70 transition cursor-pointer"
        >
          Sign In
          <ArrowLongRightIcon className="h-5 w-5" />
        </button>
        <div className="mt-3 flex items-center gap-1">
          {erroMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{erroMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
