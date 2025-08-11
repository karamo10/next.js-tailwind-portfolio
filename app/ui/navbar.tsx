"use client"
import NavLinks from '@/app/ui/nav-link';
import { Bars4Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';



export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full px-3 lg:px-8 z-50 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 ">
      <div className="w-[100%] lg:w-[75%] mx-auto flex justify-between items-center text-black py-3.5 z-100">
        <Link className="font-bold text-sm" href={'/'}>
          Material Tailwind
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link className="text-[12px] font-bold uppercase" href="/signIn">
            Sign In
          </Link>
          <Link
            className="bg-black text-xs text-white uppercase font-extrabold px-3 py-2 rounded cursor-pointer shadow-lg hover:shadow-xl no-underline text-[12px]"
            href="/blogs"
          >
            Blogs
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Bars4Icon className="h-6 w-6 text-black" />
          </button>
        </div>
        
      </div>
      <div className={`flex flex-col gap-5 items-start w-full px-3 pb-3  overflow-hidden transition-all duration-300 ease-in-out shadow-lg md:hidden  ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
            <NavLinks   />
           <div className="flex items-center gap-4">
          <Link className="text-[12px] font-extrabold uppercase" href="/signIn">
            Sign In
          </Link>
          <Link
            className="bg-black text-xs text-white uppercase font-extrabold px-3 py-2 rounded cursor-pointer shadow-lg hover:shadow-xl no-underline text-[12px]"
            href="/blogs"
          >
            Blogs
          </Link>
        </div>
        </div>
    </header>
  );
}
