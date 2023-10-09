import Image from 'next/image'
import Hero from 'public/hero.svg'

export default function Home() {
  return (
    <main className="container flex items-center gap-32">
      <div className='flex-1 flex flex-col gap-10'>
        <h1 className='text-7xl font-bold bg-gradient-to-b from-teal-900 to-neutral-300 bg-clip-text text-transparent'>Personal approach to exploring your family tree.</h1>
        <p className='flex w-3/4 text-3xl text-neutral-500 font-semibold'>
          Providing you and your relatives the tools for tracing your family's history.
        </p>
        <button className='flex max-w-fit bg-teal-400 border-none rounded-md py-2 px-4'>See Our Work</button>
      </div>
      <div className='flex-1 w-full h-[500px] object-center'>
        <Image src={Hero} alt='home page hero' className='w-[35rem] h-auto ml-[8rem]' />
      </div>
    </main>
  )
}
