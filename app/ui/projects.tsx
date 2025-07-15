import { projects } from '@/libs/placeholder-data';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {


  return (
    <section className='py-24'>
      <div className="w-[70%] m-auto">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-extrabold">My Projects</h1>
          <p className="w-[45%] text-gray-400 text-center">
            Whether you have a mobile app idea that needs to come to life or a
            website that requires a facelift, I am here to turn your digital
            dreams into reality.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-14 mt-14">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg">
              <div>
                <Image
                  src={project.image_url}
                  width={285}
                  height={90}
                  alt={'project image'}
                />
              </div>
              <div className="mt-2.5">
                <h3 className="text-sm font-extrabold mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs/5 text-gray-400 mb-2.5">
                  {project.description}
                </p>
                <Link
                  href={project.button_url}
                  className="bg-black text-xs font-bold text-white px-3 py-1.5 rounded cursor-pointer hover:shadow-lg"
                >
                  {project.button_label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
