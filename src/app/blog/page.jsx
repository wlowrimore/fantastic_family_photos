import React from 'react'
// import './blog.css';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className='flex flex-col justify-center gap-10'>
      <Link href='/blog/testId' className='flex gap-10 items-center'>
        <div className=''>
          <Image
            src='https://images.pexels.com/photos/819370/pexels-photo-819370.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
            width={400}
            height={250}
            className=''
          />
        </div>
        <div className='content'>
          <h1 className='title'>Test</h1>
          <p className='desc'>Description</p>
        </div>
      </Link>
      <Link href='/blog/testId' className='flex gap-10 items-center'>
        <div className=''>
          <Image
            src='https://images.pexels.com/photos/819370/pexels-photo-819370.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
            width={400}
            height={250}
            className=''
          />
        </div>
        <div className='content'>
          <h1 className='title'>Test</h1>
          <p className='desc'>Description</p>
        </div>
      </Link>
      <Link href='/blog/testId' className='flex gap-10 items-center'>
        <div className=''>
          <Image
            src='https://images.pexels.com/photos/819370/pexels-photo-819370.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
            width={400}
            height={250}
            className=''
          />
        </div>
        <div className='content'>
          <h1 className='title'>Test</h1>
          <p className='desc'>Description</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog