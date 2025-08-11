// import { clients } from '@/libs/placeholder-data';\
import { fetchClient } from '@/libs/data';
import Image from 'next/image';

export  default async function Client() {
  const clients = await fetchClient();
  const firstSixClient = clients.slice(0, 6);
  
  return (
    <section>
      <div className="flex justify-center flex-wrap gap-3 sm:flex-wrap md:flex-wrap items-center ">
        {firstSixClient.map((client) => (
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
