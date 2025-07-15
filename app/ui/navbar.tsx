import NavLinks from '@/app/ui/nav-link';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="fixed top-0 w-full flex justify-evenly items-center text-black py-3.5 bg-white z-0 bg-opacity-85">
      <div className="font-bold text-sm">Material Tailwind</div>
      <div>
        <NavLinks />
      </div>
      <div className="flex items-center uppercase gap-3">
        <Link className="text-[12px] font-bold" href="/sign-in">
          Sign In
        </Link>
        <Link
          className="bg-black text-white px-2.5 py-1 rounded cursor-pointer hover:shadow-lg no-underline text-[12px] font-bold"
          href="/blogs"
        >
          Blogs
        </Link>
      </div>
    </div>
  );
}
