'use client';
import { createPost, BlogPostState } from '@/libs/action';
import Image from 'next/image';
import React, { useActionState, useState } from 'react';


export default function Form() {
   const initialState: BlogPostState = {message: null, errors: {}}
  const [BlogPostState, formAction] = useActionState(createPost, initialState)
  const [imgUrl, setImgUrl] = useState('');

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();

    if (data.secure_url) {
      setImgUrl(data.secure_url);
    } else {
      console.error('Upload failed', data.secure_url);
    }
  }

  return (
    <form
      action={formAction}
      className="space-y-6 bg-neutral-100 p-6 rounded-lg shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-lg text-gray-900 font-semibold capitalize">Create blog post</h2>
      <div>
        <label
          className="block text-x1 capitalize text-gray-600"
          htmlFor="image_url"
        >
          Image url
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2 w-full py-1.5 px-1.5 bg-white placeholder:text-sm border border-gray-400 focus:border-gray-900 outline-none rounded-md shadow-sm"
          placeholder="https://example.com/image.png"
        />
        <input type="hidden" name="image_url" value={imgUrl} />
          </div>
          <div>
              {BlogPostState.errors?.image_url && BlogPostState.errors.image_url.map((error: string, index: number) => (
                  <p key={index} className="text-xs text-red-500">{error}</p>
              ))}
          </div>
      <div>
        <label
          className="block text-x1 capitalize text-gray-600"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          className="mt-2 w-full py-1.5 px-1.5 bg-white placeholder:text-sm border border-gray-400 focus:border-gray-900 outline-none rounded-md shadow-sm "
          placeholder="Enter blog post title"
        />
          </div>
          {BlogPostState.errors?.title && BlogPostState.errors.title.map((error: string, index: number) => (
              <p key={index} className="text-xs text-red-500">{error}</p>
          ))}
      <div>
        <label
          className="block text-x1 capitalize text-gray-600"
          htmlFor="date"
        >
          Date
        </label>
        <input
          type="date"
          name="date"
          className="mt-2 w-full py-1.5 px-1.5 bg-white border border-gray-400 focus:border-gray-900 outline-none rounded-md shadow-sm "
        />
          </div>
          <div>
              {BlogPostState.errors?.date && BlogPostState.errors.date.map((error: string, index: number) => (
                  <p key={index} className="text-xs text-red-500">{error}</p>
              ))}
          </div>
      <div>
        <label
          className="block text-x1 capitalize text-gray-600"
          htmlFor="summary"
        >
          Summary
        </label>
        <textarea
          name="summary"
          className="mt-2 w-full min-h-[75px] placeholder:text-base border border-gray-400 focus:border-gray-900 outline-none p-2 resize-none rounded-md shadow-sm"
          placeholder="A short summary of your blog (min 50 characters)" minLength={50}
        ></textarea>
          </div>
          <div>
              {BlogPostState.errors?.summary && BlogPostState.errors.summary.map((error: string, index: number) => (
                  <p key={index} className="text-xs text-red-500">{error}</p>
              ))}
      </div>
      <div>
        <textarea
          name="content"
          className="mt-2 w-full min-h-[100px] placeholder:text-base border border-gray-400 focus:border-gray-900 outline-none p-2 resize-none rounded-md shadow-sm"
          placeholder="Write your blog content here (min 200 characters)..."
        ></textarea>
      </div>
      <div>
        {BlogPostState.errors?.content && BlogPostState.errors.content.map((error: string, index: number) => (
          <p className="text-xs text-red-500">{error}</p>
        ))}
      </div>
      <div>
        <label htmlFor="tag" className="block text-x1 text-gray-600">
          Tags
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-1 text-gray-600">
          {[
            'UI/UX',
            'Dev',
            'Crypto',
            'Ai',
            'Tech',
            'Streaming',
            'Coding',
            'Js',
            'Startups',
            'Software',
          ].map((tag) => (
            <label className="flex items-center gap-1 text-sm text-gray-600" key={tag}>
              <input className="appearance-none w-4 h-4 border-2 rounded-full checked:bg-black border-gray-400" type="checkbox" name="tags" value={tag} />
              {tag}
            </label>
          ))}
              </div>
              <div>
                  {BlogPostState.errors?.tags && BlogPostState.errors.tags.map((error: string, index: number) => (
                      <p key={index} className="text-red-500">{error}</p>
                  ))}
              </div>
      </div>
      <div>
              <button
                  type="submit"
                  className="w-full block bg-black text-white font-extrabold py-2 rounded-md shadow-lg hover:shadow-xl"
              >Publish post</button>
      </div>

      {imgUrl && (
        <div>
          <Image src={imgUrl} alt='upload' width={400} height={300} />
        </div>
      )}
    </form>
  );
}
