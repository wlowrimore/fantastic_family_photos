'use client'

import { useSession } from 'next-auth/react';
import { notFound, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import useSWR from 'swr';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, mutate, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  console.log(data);

  if (session.status === "loading") {
    return <p className='my-[20rem] text-center text-4xl animate-pulse'>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    router?.push("/dashboard/login")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate()
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      mutate();
    } catch (err) {
      console.log(err);
    }
  }

  if (session.status === "authenticated") {
    return <div className='container lg:flex gap-12 my-24'>
      {/* posts */}
      <div className='flex-2'>
        {isLoading ? "loading" : data?.map((post) => (
          <div className='lg:grid grid-cols-3 gap-10 mb-10' key={post.id}>
            <div className='mb-10 w-80 h-55 px-4'>
              <Image src={post.img} width={400} height={300} alt="post" className='object-cover' />
            </div>
            <div className='col-span-2 px-4 relative'>
              <h2 className='w-4/5 lg:text-xl font-bold pb-1 lg:pb-3'>{post.title}</h2>
              <p className='text-justify mx-auto'>{post.content}</p>
              <span onClick={() => handleDelete(post._id)} className='absolute  top-0 right-[1rem] lg:top-1 lg:right-[8.5rem] text-red-300 text-sm cursor-pointer font-bold border border-red-300 rounded-lg px-2 transform hover:text-red-500 hover:border-red-500 hover:scale-105'>delete</span>
            </div>
          </div>
        ))}
      </div>
      {/* form for new posts */}
      <div className=' px-4 lg:w-[50%] mx-auto'>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 mb-6'>
          <h1 className='lg:text-3xl font-bold'>Add New Post</h1>
          <input type='text' placeholder='Title' className='bg-transparent border border-neutral-400 rounded outline-none h-[3rem] px-2' />
          <input type='text' placeholder='Description' className='bg-transparent border border-neutral-400 rounded outline-none h-[3rem] px-2' />
          <input type='text' placeholder='Image' className='bg-transparent border border-neutral-400 rounded outline-none h-[3rem] px-2' />
          <textarea placeholder='Content' className='bg-transparent border border-neutral-400 rounded outline-none px-2' cols='30' rows='10'></textarea>
          <button className='bg-teal-400 border-none rounded outline-none h-[3rem] text-neutral-950 text-xl font-bold transform hover:bg-neutral-800 hover:text-teal-200 duration-300'>Post</button>
        </form>
      </div>
    </div>
  }
}

export default Dashboard