'use client';

import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", { email, password })
  };

  return (
    <div className='flex flex-col justify-center item-center mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
        <input type='email' placeholder='email' className='bg-transparent border border-neutral-300 rounded h-[3rem] px-2 outline-none' required />

        <input type='password' placeholder='password' className='bg-transparent border border-neutral-300 rounded h-[3rem] px-2 outline-none' required />

        <button className='flex w-full justify-center bg-teal-400 border-none rounded py-2 px-4 text-neutral-700 font-semibold tracking-wide outline-none transition hover:bg-opacity-70 duration-300'>Login</button>
      </form>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  )
}

export default Login