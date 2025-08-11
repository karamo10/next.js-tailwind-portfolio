import Link from 'next/link';
import SignOut from '../ui/signout';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="pt-[10rem] min-h-screen relative">
      <div className=" flex flex-wrap items-center justify-between gap-3 py-3 mx-3 lg:mx-auto lg:w-[50%] lg:gap-0">
        <Link className="text-xl lg:text-2xl font-extrabold" href={'/blogs'}>
          Blogs
        </Link>
        <SignOut />
      </div>
      {children}
    </section>
  );
}
