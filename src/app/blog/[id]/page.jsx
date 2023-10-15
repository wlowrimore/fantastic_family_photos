import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    return notFound();
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className='flex flex-col my-28 lg:my-24 px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        <div className='flex flex-col lg:gap-y-6'>
          <h1 className='lg:w-4/5 lg:text-5xl font-bold'>{data.title}</h1>
          <p>{data.desc}</p>
          <div className='flex space-x-2 items-center my-4 lg:my-0'>
            <Image
              src={data.img}
              alt='nothing'
              width={50}
              height={50}
              className='rounded-[50%]'
            />
            <span className='text-xs lg:text-sm tracking-wider mt-1'>author: {data.username}</span>
          </div>
        </div>
        <div className='h-[19rem] relative'>
          <Image
            src={data.img}
            fill={true}
            className='object-cover rounded-2xl shadow-lg shadow-neutral-800'
          />
        </div>
      </div>
      <div className='mt-10 text-justify'>
        <p>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost