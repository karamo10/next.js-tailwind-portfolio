import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white p-8 mt-[3rem]">
      <div className="w-[75%] mx-auto grid min-h-[60vh] grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="row-start-2 lg:row-auto ">
          <h1 className="font-semibold mb-3 lg:text-4xl/10 text-3xl">
            Welcome to my Web <br /> Development Portofolio!
          </h1>
          <p className="text-gray-400 text-x1 font-normal mb-3 w-[85%]">
            I&rsquo;m Lily Smith, a passionate web developer based in USA. Here,
            you&rsquo;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
          <form>
            <label htmlFor="email" className="text-[12px]">
              Your Email
            </label>
            <div className="flex my-1.5 gap-3 flex-col md:w-10/12 md:flex-row">
              <input
                className="w-full border border-gray-400 focus:border-gray-900 outline-none px-4 py-1 rounded placeholder:text-xs lg:w-[300px]"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button className="bg-black text-[12px] text-white font-extrabold text-nowrap uppercase px-4 py-2 border-1 outline rounded shadow-lg cursor-pointer hover:shadow-xl">
                required offer
              </button>
            </div>
            <span className="mt-3 text-[12px] text-gray-400">
              Read my
              <Link className="underline" href="/">
                {' '}
                Terms and conditions
              </Link>
            </span>
          </form>
        </div>
        <Image
            className="bg-center h-[32rem] rounded-xl w-full object-cover"
            src="/image-7.svg"
            width={560}
            height={680}
            alt="Hero image svg"
          ></Image>
      </div>
    </section>
  );
}
