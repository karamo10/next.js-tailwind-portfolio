import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-4 pt-8 w-full lg:px-8">
      <div className="w-[100%] mx-auto border-t-2 border-gray-100 shadow-lg flex flex-col items-center gap-4 py-6 lg:w-[75%] lg:flex-row lg:justify-between">
        <div>
          <p className="text-xs text-gray-600">
            © 2025 Made with Material Tailwind by Creative Tim.
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-4 text-xs text-gray-600 lg:flex-nowrap lg:gap-8">
          <Link className="hover:text-gray-800 transition" href={'/'}>
            Home
          </Link>
          <Link className="hover:text-gray-800 transition" href={'/about-us'}>
            About us
          </Link>
          <Link className="hover:text-gray-800 transition" href={'/blogs'}>
            Blogs
          </Link>
          <Link className="hover:text-gray-800 transition" href={'/services'}>
            Services
          </Link>
          <Link
            className="bg-black text-xs font-extrabold text-white uppercase rounded py-2 px-6 shadow-lg hover:shadow-xl"
            href={'/Subscribe'}
          >
            Subscribe
          </Link>
        </div>
      </div>
    </footer>
  );
}
