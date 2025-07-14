import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section>
      <div className="w-[70%] h-[475px] ml-auto mr-auto mt-19 flex items-center justify-center flex-1 gap-12 overflow-hidden">
        <div className="flex-1">
          <h1 className="text-4xl/11 font-extrabold mb-3">
            Welcome to my Web Development Portofolio!
          </h1>
          <p className=" text-gray-400 text-[15px]/6 mb-3 w-[85%]">
            I&rsquo;m Lily Smith, a passionate web developer based in USA. Here,
            you&rsquo;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
          <form>
            <label htmlFor="email" className="text-[12px]">
              Your Email
            </label>
            <div className="flex item my-1.5 gap-3">
              <input
                className="hero-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button className="bg-black text-[12px] text-white uppercase px-4 rounded cursor-pointer hover:shadow-lg">
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
        <div className="hero-img flex-1  p-1">
          <Image
            className="bg-center rounded-4xl"
            src="/image-7.svg"
            width={560}
            height={680}
            alt="Hero image svg"
            // src={HeroImage}
            // placeholder='blur'
          ></Image>
        </div>
      </div>
    </section>
  );
}
