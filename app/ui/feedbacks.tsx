'use client';
import { avatars } from '@/libs/placeholder-data';
import Image from 'next/image';
import { useState } from 'react';

export default function Feedbacks() {
  const avatarImages = avatars;
  const [activeAvatar, setActiveAvatar] = useState(avatarImages[0]);

  return (
    <section>
      <div className="bg-white w-[70%] m-auto py-16">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          What Clients Say
        </h1>
        <p className="text-sm text-gray-400 w-[45%] text-center m-auto">
          Discover what clients have to say about their experiences working with
          me. My clients satisfaction is my greatest achievement!
        </p>
        <div className="mt-12 flex gap-3 w-[80%] mr-auto ml-auto">
          <div className=" flex-1/2">
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
          <div>
            <Image
              src={activeAvatar.image_url}
              width={275}
              height={100}
              alt={'avatar image'}
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
