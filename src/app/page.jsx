import Button from '@/components/button/Button'
import Image from 'next/image'
import Hero from 'public/hero.svg'

import './page.css';

export default function Home() {
  return (
    <main className="container mx-4 flex flex-col lg:flex-row items-center lg:gap-32">
      <div className='flex-1 flex flex-col gap-10 my-32 lg:my-48'>
        <h1 className='text-4xl lg:text-7xl font-bold bg-gradient-to-b from-teal-900 to-neutral-300 bg-clip-text text-transparent'>Personal approach to exploring your family tree.</h1>
        <p className='flex w-3/4 text-3xl text-neutral-500 font-semibold'>
          Providing you and your relatives the tools for tracing your family&apos;s history.
        </p>
        <Button url='/portfolio' text='See Our Work' />
      </div>
      <div className='flex-1 w-full h-[500px] object-center'>
        <Image src={Hero} alt='home page hero' className='hidden lg:block image w-[35rem] h-auto lg:ml-[8rem]' />
      </div>
    </main>
  )
}
