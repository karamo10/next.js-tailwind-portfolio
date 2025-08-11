import Client from './client';

export default function TrustedClients() {
  return (
    <section className="p-4 lg:p-8">
      <div className="w-[100%] m-auto py-18 lg:w-[75%]">
        <h1 className="text-sm uppercase text-gray-400 text-center mb-3">
          Popular Clients
        </h1>
        <h2 className="text-3xl w-[40%] font-bold text-center mx-auto mb-12">
          Trusted by over 10,000+ clients
        </h2>
        <Client />
      </div>
    </section>
  );
}
