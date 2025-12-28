'use client';

import { useActionState, useEffect, useState, useRef } from 'react';
import { State, handleFormSubmit } from '@/libs/action';
import SuccessModal from './success-modal';

export default function ContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(handleFormSubmit, initialState);
  const [showModal, setShowModal] = useState(false)
  const lastMessageRef = useRef('');

  useEffect(() => {
    if (state.message === "Message successfully Sent!" && state.message !== lastMessageRef.current) {
      setShowModal(true)
      lastMessageRef.current = state.message
    }
  }, [state.message]) 

  return (
    <form action={formAction} className="w-full px-0 lg:pl-8 lg:w-1/2 font-sans">
      <div className="grid lg:grid-cols-2 gap-2">
        <div className="flex flex-col-reverse">
          <input
            className="peer w-full py-1 bg-white placeholder:text-xs placeholder:text-gray-400 outline-0 border-b-2 border-gray-400 focus:border-gray-900 "
            type="text"
            placeholder="eg Lucas"
            name="name"
          />
          <label
            className="block text-x1 text-gray-600 capitalize mb-1 peer-focus:text-gray-900 transition"
            htmlFor="name"
          >
            Fisrt name
          </label>
        </div>
        <div className="flex flex-col-reverse">
          <input
            className="peer w-full py-1 bg-white placeholder:text-xs placeholder:text-gray-400 outline-0 border-b-2 border-gray-400"
            type="text"
            placeholder="eg Jones"
            name="lastname"
          />
          <label className="block text-x1 text-gray-600 capitalize mb-1 peer-focus:text-gray-900 transition"
            htmlFor="lastname">
            Last name
          </label>
        </div>
      </div>
      <div>
        {state.errors?.name &&
          state.errors.name.map((error: string, index: number) => (
            <p key={index} className="text-xs text-red-500 mt-2">
              {error}
            </p>
          ))}
      </div>
      <div className="flex flex-col-reverse mt-3">       
        <input
          className="peer w-full py-1 bg-white placeholder:text-xs placeholder:text-gray-400 outline-0 border-b-2 border-gray-400 focus:border-gray-900"
          type="email"
          name="email"
          placeholder="eg. lucas@mail.com"
        />
         <label className="block text-x1 text-gray-600 capitalize mb-1 peer-focus:text-gray-900" htmlFor="email">
          Email
        </label>
      </div>
      <div>
        {state.errors?.email &&
          state.errors.email.map((error: string, index: number) => (
            <p key={index} className="text-xs text-red-500 mt-2">
              {error}
            </p>
          ))}
      </div>
      <p className="text-x1 text-gray-600 mt-8">What are you interested on?</p>
      <div className="flex items-center flex-wrap mt-4 gap-3">
        <div className="inline-flex gap-1">
          <input
            type="radio"
            name="type"
            value="design"
            className="peer appearance-none bg-white h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-black"
          />
          <label className="text-sm text-gray-400 peer-checked:text-gray-800 transition" htmlFor="design">
            Design
          </label>
        </div>
        <div className="inline-flex gap-1">
          <input
            type="radio"
            name="type"
            value="development"
            className="peer appearance-none bg-white h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-black"
          />
          <label className="text-sm text-gray-400 peer-checked:text-gray-800 transition" htmlFor="development">
            Development
          </label>
        </div>
        <div className="inline-flex gap-1">
          <input
            type="radio"
            name="type"
            value="support"
            className="peer appearance-none bg-white w-4 h-4 rounded-full border-2 border-gray-400 checked:bg-black "
          />
          <label className="text-sm text-gray-400 peer-checked:text-gray-800 transition" htmlFor="support">
            Support
          </label>
        </div>
        <div className="inline-flex gap-1">
          <input
            type="radio"
            name="type"
            value="other"
            className="peer appearance-none bg-white h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-black"
          />
          <label className="text-sm text-gray-400 peer-checked:text-gray-800 transition" htmlFor="other">
            Other
          </label>
        </div>
      </div>
      <div className="flex flex-col-reverse mt-10">
        
        <textarea 
          className="peer w-full h-[100px] outline-0 border-b-2 border-gray-400 resize-none focus:border-gray-900"
          name="message"
        ></textarea>
        <label className="block text-x1 text-gray-600 peer-focus:text-gray-900 transition" htmlFor="message">
          Your Message
        </label>   
      </div>
      <div>
          {state.errors?.message &&
            state.errors.message.map((error: string, index: number) => (
              <p key={index} className="text-xs text-red-500 mt-2">{error}</p>
            ))}
        </div>
      <button className="bg-black w-full text-white text-xs font-extrabold uppercase border-1 py-2 px-3 rounded-md cursor-pointer shadow-lg hover:shadow-xl transition mt-8 lg:w-[150px] lg:float-end">
        Send Message
      </button>
      {showModal && (<SuccessModal onClose={() => setShowModal(false)} />)}
    </form>
  );
}
