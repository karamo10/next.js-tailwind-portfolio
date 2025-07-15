import { clients } from '@/libs/placeholder-data';
import Image from 'next/image';
// import { fetchClient } from '../libs/data';

export  default async function Client() {
  // const clients = await fetchClient();
  return (
    <section>
      <div className="flex items-center justify-around w-[90%] m-auto">
        {clients.map((client) => (
          <div key={client.id}>
            <Image
              src={client.image_url}
              width={125}
              height={15}
              alt={'client picture'}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
