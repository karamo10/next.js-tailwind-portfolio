import Link from 'next/link';

export default function Footer() {
  return (
    <section className="pt-40">
      <div className="w-[70%] m-auto border-t-2 border-gray-100 shadow-lg flex justify-between items-center py-6">
        <div>
          <p className="text-xs text-gray-600">
            © 2025 Made with Material Tailwind by Creative Tim.
          </p>
        </div>
        <div className="flex items-center gap-8 text-xs text-gray-600">
          <Link className="hover:text-gray-800 transition" href={'/'}>
            Home
          </Link>
          <Link className="hover:text-gray-800 transition" href={'/about-us'}>
            About us
          </Link>
          <Link className="hover:text-gray-800 transition" href={'/blog'}>
            Blog
          </Link>
          <Link
            className="bg-black text-white rounded py-1.5 px-6 font-bold"
            href={'/services'}
          >
            Service
          </Link>
        </div>
      </div>
    </section>
  );
}
