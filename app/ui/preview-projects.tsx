// import { projects } from '@/libs/placeholder-data';
import { fetchAllProject } from '@/libs/data';
import Image from 'next/image';
import Link from 'next/link';
import ViewMoreProject from './view-more-project';



export default async function Projects() {
  const allProjects = await fetchAllProject();
  const previewProjects = allProjects.slice(0, 4);

  return (
    <section className="px-4 py-26 lg:p-8">
      <div className="w-[100%] m-auto lg:w-[75%]">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-extrabold">My Projects</h1>
          <p className="w-[85%] sm:w-[80%] text-gray-400 text-center">
            Whether you have a mobile app idea that needs to come to life or a
            website that requires a facelift, I am here to turn your digital
            dreams into reality.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-14">
          {previewProjects.map((project) => (
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
                <p className="text-xs/5 text-gray-400 w-1/1 mb-2.5">
                  {project.description}
                </p>
                <Link
                  href={project.button_url}
                  className="bg-black text-xs font-extrabold text-white uppercase px-3 py-2 rounded-md shadow-lg cursor-pointer hover:shadow-xl"
                >
                  {project.button_label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[75%] mx-auto flex items-center justify-center py-8 mt-2'>
       <ViewMoreProject />
      </div>
    </section>
  );
}
