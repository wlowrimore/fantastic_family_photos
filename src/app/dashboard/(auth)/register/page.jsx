'use client';

import Button from '@/components/button/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(err);
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col justify-center item-center mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
        <input type='text' placeholder='username' className='bg-transparent border border-neutral-300 rounded h-[3rem] px-2 outline-none' required />

        <input type='email' placeholder='email' className='bg-transparent border border-neutral-300 rounded h-[3rem] px-2 outline-none' required />

        <input type='password' placeholder='password' className='bg-transparent border border-neutral-300 rounded h-[3rem] px-2 outline-none' required />

        <button className='flex w-full justify-center bg-teal-400 border-none rounded py-2 px-4 text-neutral-700 font-semibold tracking-wide outline-none transition hover:bg-opacity-70 duration-300'>Register</button>
      </form>
      {err && <p className='text-red-500'>Something went wrong.  Please try again.</p>}
      <Link href='/dashboard/login' className='text-center my-4 transform hover:opacity-60 duration-300'>Login with an existing account</Link>
    </div>
  )
}

export default Register