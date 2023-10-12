import React from 'react'
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

export const metadata = {
  title: 'REWTZ Blog',
  description: 'View blog entries created by your family members'
}

const Blog = async () => {
  const data = await getData()

  return (
    <div className='flex flex-col justify-center gap-10'>
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/blog/${item._id}`} className='flex w-full items-center gap-10'>
            <div className=''>
              <Image
                src={item.img}
                alt=''
                width={400}
                height={250}
                className=''
              />
            </div>
            <div className='content'>
              <h1 className='title'>{item.title}</h1>
              <p className=''>{item.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Blog