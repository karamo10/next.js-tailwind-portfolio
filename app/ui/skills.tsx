'use server';
import { fetchSkill } from '@/libs/data';
import { skills } from '@/libs/placeholder-data';


export default async function Skills() {

  const skill = await fetchSkill();
  console.log(skill);

  return (
    <section>
      <div className="w-[70%] m-auto text-center px-2">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-sm font-extrabold">my skills</h1>
          <h2 className="text-4xl font-extrabold">What I do</h2>
          <p className="w-[80%] text-gray-400">
            I&rsquo;m not just a developer; I&rsquo;m a digital dreamweaver.
            Crafting immersive online experiences is not just a job but my
            calling. Discover below how I can help you.
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-16 mt-12 p-1">
          {skills.map((skill) => {
            return (
              <div key={skill.id} className="bg-white px-8 py-2 rounded-2xl">
                <span className="bg-black p-1 text-white rounded">Ico</span>
                <div className="mt-6">
                  <h3 className="text-sm font-extrabold mb-2">{skill.title}</h3>
                  <p className="text-xs/5 text-gray-400 w-[90%] m-auto">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
