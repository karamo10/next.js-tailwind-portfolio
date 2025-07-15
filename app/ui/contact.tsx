import { PhoneIcon, InboxIcon, TicketIcon } from '@heroicons/react/24/solid';
import { inter } from './fonts';

export default function Contact() {
  return (
    <section className={`${inter.className} antialiased py-20`}>
      <div className="w-[70%] m-auto ">
        <h1 className="text-3xl font-extrabold text-center mb-4">Contact Us</h1>
        <p className="w-[50%] m-auto text-center text-gray-400">
          Ready to get started? Feel free to reach out through the contact form,
          and let embark on a journey of innovation and success.
        </p>
        <div className="flex p-8 border-2 border-gray-100 shadow-lg  h-[475px] mt-16 gap-6">
          <div className="bg-black rounded-lg px-12 py-10 w-[40%] text-white ">
            <h3 className="text-xl font-extrabold mb-2">Contact Information</h3>
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
          <form action="" className="flex-1/2  px-6 ">
            <div className="grid lg:grid-cols-2 gap-2">
              <div>
                <label
                  className="text-xs text-gray-600 capitalize mb-1"
                  htmlFor="firstname"
                >
                  Fisrt name
                </label>
                <input
                  className="w-full py-1 bg-white placeholder:text-xs placeholder:text-gray-400 outline-0 border-b-1 border-gray-400 focus:border-gray-900"
                  type="text"
                  placeholder="eg Lucas"
                  name="firstname"
                />
              </div>
              <div>
                <label
                  className="text-xs text-gray-600 mb-1"
                  htmlFor="lastname"
                >
                  Last name
                </label>
                <input
                  className="w-full py-1 bg-white placeholder:text-xs placeholder:text-gray-400 outline-0 border-b-1 border-gray-400 focus:border-gray-900"
                  type="text"
                  placeholder="eg Jones"
                  name="lastname"
                />
              </div>
            </div>
            <div className="mt-3">
              <label className="text-xs text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full py-1 bg-white placeholder:text-xs placeholder:text-gray-400 outline-0 border-b-1 border-gray-400 focus:border-gray-900"
                type="email"
                name="email"
                placeholder="eg. lucas@mail.com"
              />
            </div>
            <p className="text-xs text-gray-600 mt-7">
              What are you interested on?
            </p>
            <div className="flex items-center mt-3 gap-3">
              <div className="inline-flex gap-1">
                <input
                  type="radio"
                  name="type"
                  value="design"
                  className="appearance-none bg-white h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-black"
                />
                <label className="text-xs text-gray-400" htmlFor="design">
                  Design
                </label>
              </div>
              <div className="inline-flex gap-1">
                <input
                  type="radio"
                  name="type"
                  value="development"
                  className="appearance-none bg-white h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-black"
                />
                <label className="text-xs text-gray-400" htmlFor="development">
                  Development
                </label>
              </div>
              <div className="inline-flex gap-1">
                <input
                  type="radio"
                  name="type"
                  value="support"
                  className="appearance-none bg-white w-4 h-4 rounded-full border-2 border-gray-400 checked:bg-black "
                />
                <label className="text-xs text-gray-400" htmlFor="support">
                  Support
                </label>
              </div>
              <div className="inline-flex gap-1">
                <input
                  type="radio"
                  name="type"
                  value="other"
                  className="appearance-none bg-white h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-black"
                />
                <label className="text-xs text-gray-400" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            <div className="mt-10">
              <label
                className="text-xs placeholder:text-gray-600"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className="w-full h-[70px]  outline-0 border-b-1 border-gray-400 resize-none focus:border-gray-900"
                name="message"
              ></textarea>
            </div>
            <button className="bg-black text-white text-xs font-extrabold py-1.5 px-3 rounded cursor-pointer mt-8 float-end">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
