'use client';
// Extracting each skill as it own component
import {
  TableCellsIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from '@heroicons/react/20/solid';

const iconMap = {
  TableCellsIcon: TableCellsIcon,
  FingerPrintIcon: FingerPrintIcon,
  SwatchIcon: SwatchIcon,
  HashtagIcon: HashtagIcon,
  EyeIcon: EyeIcon,
  DocumentTextIcon: DocumentTextIcon,
};

type SkillCardProps = {
  title: string;
  description: string;
  iconKey: keyof typeof iconMap;
};

export default function SkillCard({
  title,
  description,
  iconKey,
}: SkillCardProps) {
  const Icon = iconMap[iconKey];

  return (
    <div className="sm:px-3 px-2 py-2 rounded-2xl">
      {Icon && (
        <Icon className="bg-black text-white font-extrabold h-10 w-10 p-2 mx-auto rounded-full" />
      )}
      <div className="mt-6">
        <h3 className="text-sm font-extrabold mb-2">{title}</h3>
        <p className="text-xs/5 text-gray-400 w-[90%] m-auto">{description}</p>
      </div>
    </div>
  );
}
