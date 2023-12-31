import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'

import './contact.css';

export const metadata = {
  title: 'REWTZ Contact Information',
  description: 'Contact information for the developers and owners of REWTZ.',
}

const Contact = () => {
  return (
    <div className='container w-full flex flex-col items-center my-32 lg:my-24 lg:px-0'>
      <div className='text-xl w-full text-center lg:text-6xl lg:mb-[8rem] font-semibold'>Questions or Comments?</div>
      <div className='flex flex-col lg:flex-row lg:gap-44'>
        <div className='flex-1 w-full h-[30rem] relative'>
          <Image
            src='/contact.png'
            alt=''
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='image'
          />
        </div>
        <form className='flex-1 flex-col p-6 space-y-4'>
          <input type='text' placeholder='name' className='w-full h-[2.5rem] p-2 bg-transparent border border-neutral-300 outline-none text-neutral-500' />
          <input type='email' placeholder='email' className='w-full h-[2.5rem] p-2 bg-transparent border border-neutral-300 outline-none text-neutral-500' />
          <textarea placeholder='message' className='w-full bg-transparent border border-neutral-300 outline-none text-neutral-500 p-2' cols='30' rows='10'></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact