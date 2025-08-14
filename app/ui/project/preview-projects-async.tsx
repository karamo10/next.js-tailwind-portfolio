import { fetchAllProject } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";

export default async function PreviewProject({isHome = false}) {
    //  await new Promise((resolve) => setTimeout(resolve, 20000))
     const allProjects = await fetchAllProject();
    const projects = isHome ? allProjects.slice(0, 4) : allProjects;
    
    return (
         <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-14">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg">
              <div>
                <Image
                  src={project.image_url}
                  width={290}
                  height={90}
                    alt={'project image'}
                    className="w-full object-cover"
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
    )
} 