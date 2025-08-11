// import { skills } from '@/libs/placeholder-data';
import { fetchSkill } from '@/libs/data';
import SkillCard from './skillcard';



export default async function Skills() {
  const skills = await fetchSkill();

  return (
    <section className="p-4 lg:p-8">
      <div className="w-[100%] m-auto text-center px-2 lg:w-[75%]">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-sm font-extrabold">my skills</h1>
          <h2 className="text-4xl font-extrabold">What I do</h2>
          <p className="w-[80%] text-gray-400">
            I&rsquo;m not just a developer; I&rsquo;m a digital dreamweaver.
            Crafting immersive online experiences is not just a job but my
            calling. Discover below how I can help you.
          </p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12 p-1">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              iconKey={skill.icon_image || skill.icon_name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
