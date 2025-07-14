import Client from '@/app/ui/client';

export default async function Clients() {
  return (
    <section className="w-[70%] m-auto py-24">
      <div className="text-center mb-8">
        <h1 className="text-sm font-extrabold">My awesome clients</h1>
      </div>
      <Client />
    </section>
  );
}
