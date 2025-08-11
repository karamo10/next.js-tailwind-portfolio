'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserIcon,
  DocumentIcon
} from '@heroicons/react/24/solid';

const links = [
  { name: 'Page', href: '/', icon: HomeIcon },
  { name: 'Account', href: '/account', icon: UserIcon },
  { name: 'Docs', href: '/docs', icon: DocumentIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex-col gap-8 md:flex md:flex-row md:gap-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('text-[13px] flex items-center mt-5 md:mt-0 gap-2', {
              'text-blue-600': pathname === link.href,
            })}
          >
            <LinkIcon
              className={clsx('w-4 text-black', {
                'text-blue-600': pathname === link.href,
              })}
            />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
