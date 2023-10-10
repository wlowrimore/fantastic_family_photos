import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react'
import Screens from 'public/screens.jpg'


const Category = ({ params }) => {
  console.log(params);
  return (
    <div className='flex gap-40'>
      <div className='container flex flex-col'>
        <h1 className='text-3xl text-teal-400 font-bold'>{params.category}</h1>
        <div className='flex-1 flex flex-col justify-center gap-6'>
          <h1 className='text-5xl font-bold'>Creative Portfolio</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Aliquet eget sit amet tellus cras adipiscing. In hendrerit gravida rutrum quisque</p>
          <Button url='#' text='Something' />
        </div>
      </div>
      <div className='flex w-full'>
        <Image src={Screens} alt='' className=""
        />
      </div>
    </div>
  )
}

export default Category