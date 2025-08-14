'use client';
import { useDebouncedCallback } from 'use-debounce';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="text"
      placeholder="Search by name..."
      className="px-3 py-2 rounded-lg border border-gray-400 focus:border-gray-900 outline-none placeholder:text-xs lg:placeholder:text-base w-[40%] lg:w-[50%]"
      defaultValue={searchParams.get('q') || ''}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
