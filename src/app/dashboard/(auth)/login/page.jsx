'use client';

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import GoogleIcon from '../../../../../public/google-icon.webp';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <p className='text-center text-4xl font-bold transform animate-pulse'>Loading...</p>
  }

  if (session.status === 'authenticated') {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", { email, password })
  };

  return (
    <div className='min-h-screen flex flex-col pt-32 lg:pt-0 lg:justify-center item-center mx-auto p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
        <input type='email' placeholder='email' className='bg-transparent border border-neutral-300 rounded h-[3rem] px-2 outline-none' required />

        <input type='password' placeholder='password' className='bg-transparent border border-neutral-300 rounded h-[3rem] px-2 outline-none' required />

        <button className='flex w-full justify-center bg-teal-400 border-none rounded py-2 px-4 text-neutral-700 font-semibold tracking-wide outline-none transition hover:bg-opacity-70 duration-300'>Login</button>
        <Link href='/dashboard/register' className='text-sm text-center underline'>Register Here</Link>
      </form>
      <hr className='lg:h-[0.14rem] my-10 bg-neutral-300' />
      <div className='w-full flex justify-center items-center gap-2 border border-none bg-cyan-700/60 rounded py-2 transform hover:animate-pulse'>
        <Image src={GoogleIcon} alt="" width={20} height={20} className='w-10 bg-teal-100 border-none rounded-full p-2' />
        <button onClick={() => signIn('google')}
          className='text-xl font-semibold py-1 px-2'>Login with Google</button>
      </div>
    </div>
  )
}

export default Login