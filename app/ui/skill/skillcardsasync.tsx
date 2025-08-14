import { fetchSkill } from '@/libs/data';
import SkillCard from '../skill/skillcard';

export default async function SkillCardsAsync() {
  // await new Promise((resolve) => setTimeout(resolve, 20000));
  const skills = await fetchSkill();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12 p-1">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          title={skill.title}
          description={skill.description}
          iconKey={skill.icon_image || skill.icon_name}
        />
      ))}
    </div>
  );
}
