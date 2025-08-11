import ContactForm from './contact-form';
import { PhoneIcon, InboxIcon, TicketIcon } from '@heroicons/react/24/solid';
import { inter } from './fonts';

export default function Contact() {

  return (
    <section className="px-4 py-20 lg:p-8">
      <div className="w-[100%] mx-auto lg:w-[75%]">
        <h1 className="text-3xl font-extrabold text-center mb-4">Contact Us</h1>
        <p className="w-[80%] m-auto text-center text-gray-400 lg:w-[50%]">
          Ready to get started? Feel free to reach out through the contact form,
          and let embark on a journey of innovation and success.
        </p>
        <div className="flex flex-wrap p-2 border-2 border-gray-100 shadow-lg mt-16 gap-6 lg:flex-nowrap lg:p-8">
          <div className={`${inter.className} bg-black rounded-lg px-3 py-10 w-full text-white lg:w-[40%] lg:px-10`}>
            <h3 className="text-sm font-extrabold mb-2 lg:text-xl">Contact Information</h3>
            <p className="text-xs/5 mb-6">
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-2 text-xs font-bold">
                <PhoneIcon className="h-5 w-10" />
                +1(424) 543 3354
              </span>
              <span className="flex items-center gap-2 text-xs font-bold">
                <InboxIcon className="h-5 w-10" />
                Open Support Ticket
              </span>
              <span className="flex items-center gap-2 text-xs font-bold">
                <TicketIcon className="h-5 w-10" />
                Open Support Ticket
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
