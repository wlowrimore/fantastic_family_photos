import Link from "next/link"

const Portfolio = () => {
  return (
    <div className='container w-full flex flex-col'>
      <h1 className='text-3xl my-2 font-bold'>Choose a Gallery</h1>
      <div className='flex space-x-6'>
        <Link href='/portfolio/illustrations' className='border-4 border-neutral-400 rounded-md w-[19rem] h-[25rem] bg-illustrations bg-cover relative transform hover:opacity-80 duration-300'>
          <span className='absolute right-5 bottom-3 text-neutral-200 text-4xl transform hover:text-teal-600 duration-300 font-semibold'>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className='border-4 border-neutral-400 rounded-md w-[19rem] h-[25rem] bg-websites bg-cover relative transform hover:opacity-80 duration-300'>
          <span className='absolute right-5 bottom-3 text-neutral-200 text-4xl transform hover:text-teal-600 duration-300 font-semibold'>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className='border-4 border-neutral-400 rounded-md w-[19rem] h-[25rem] bg-apps bg-cover relative transform hover:opacity-80 duration-300'>
          <span className='absolute right-5 bottom-3 text-neutral-200 text-4xl transform hover:text-teal-600 duration-300 font-semibold'>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio