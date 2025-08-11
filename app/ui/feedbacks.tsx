'use client';
import { avatars } from '@/libs/placeholder-data';
import Image from 'next/image';
import { useState } from 'react';

export default function Feedbacks() {
  const avatarImages = avatars;
  const [activeAvatar, setActiveAvatar] = useState(avatarImages[2]);

  return (
    <section className="p-4 lg:p-8">
      <div className=" w-[100%] m-auto py-16 lg:w-[75%]">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          What Clients Say
        </h1>
        <p className="text-sm text-gray-400 w-[80%] text-center m-auto lg:w-[45%]">
          Discover what clients have to say about their experiences working with
          me. My clients satisfaction is my greatest achievement!
        </p>
        <div className="mt-12 grid gap-8 w-full mx-auto lg:grid-cols-2 bg-white">
          <div className="lg:pl-24">
            <h2 className="text-2xl w-[40%] font-extrabold mb-2">
              Mobile App Development
            </h2>
            <p className="w-[60%] text-xs/5 text-gray-400 mb-1.5">
              I had the pleasure of working with Lily on a critical web
              development project, and I can confidently say that their
              expertise and professionalism exceeded my expectations.
            </p>
            <h6 className="text-sm font-bold">Michael - Technical Manager</h6>
            <p className="text-xs text-gray-400">Marketing @ APPLE INC.</p>
            <div className="flex gap-3 mt-3">
              {avatarImages.map((avatarImg) => (
                <Image
                  key={avatarImg.index}
                  src={avatarImg.image_url}
                  alt={'avatar image'}
                  height={40}
                  width={40}
                  onClick={() => setActiveAvatar(avatarImg)}
                  className={`object-cover cursor-pointer rounded ${
                    activeAvatar === avatarImg ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
          <Image
              src={activeAvatar.image_url}
              width={275}
              height={100}
              alt={'avatar image'}
              className="object-cover rounded-xl"
            />
        </div>
      </div>
    </section>
  );
}
