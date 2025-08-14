import Client from '@/app/ui/client/client';
import { Suspense } from 'react';
import { ClientSkeleton } from '../skeleton/skeletons';


export default async function Clients() {
  return (
    <section className="w-[70%] m-auto py-14">
      <div className="text-center py-5">
        <h1 className="text-sm font-extrabold mb-3">My awesome clients</h1>
        <Suspense fallback={<ClientSkeleton />}>
           <Client />
       </Suspense>
      </div>
    </section>
  );
}
