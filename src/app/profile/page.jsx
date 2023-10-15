'use client';

import { useSession } from "next-auth/react";
import Link from "next/link"

const Profile = () => {
  const session = useSession();
  // const username = session?.data?.user.name
  const data = [session?.data?.user.name, session?.data?.user.email]

  const handleSubmit = () => {
    console.log('form submitted');
  }

  return (
    <div className='container w-full flex flex-col'>

      <h1 className='text-2xl my-2 font-semibold'>Welcome back {data[0]}</h1>
      <form onSubmit={handleSubmit} className='flex space-x-6'>
        <input type='text' placeholder='update username' className='bg-transparent h-[3rem] px-2 border border-neutral-300 outline-none' />
        <input type='email' placeholder='update email' className='bg-transparent h-[3rem] px-2 border border-neutral-300 outline-none' />
        <button className=''>Submit</button>
        {/* <Link href='/Profile/illustrations' className='border-4 border-neutral-400 rounded-md w-[19rem] h-[25rem] bg-illustrations bg-cover relative transform hover:opacity-80 duration-300'>
          <span className='absolute right-5 bottom-3 text-neutral-200 text-4xl transform hover:text-teal-600 duration-300 font-semibold'>Illustrations</span>
        </Link>
        <Link href='/Profile/websites' className='border-4 border-neutral-400 rounded-md w-[19rem] h-[25rem] bg-websites bg-cover relative transform hover:opacity-80 duration-300'>
          <span className='absolute right-5 bottom-3 text-neutral-200 text-4xl transform hover:text-teal-600 duration-300 font-semibold'>Websites</span>
        </Link>
        <Link href='/Profile/applications' className='border-4 border-neutral-400 rounded-md w-[19rem] h-[25rem] bg-apps bg-cover relative transform hover:opacity-80 duration-300'>
          <span className='absolute right-5 bottom-3 text-neutral-200 text-4xl transform hover:text-teal-600 duration-300 font-semibold'>Applications</span>
        </Link> */}
      </form>
    </div>
  )
}

export default Profile