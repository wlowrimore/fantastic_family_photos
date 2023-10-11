import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react'
import Screens from 'public/screens.jpg'
import { items } from './data.js';
import { notFound } from 'next/navigation.js';

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data;
  }
  return notFound();
}

const Category = ({ params }) => {
  const data = getData(params.category)
  console.log(params);
  return (
    <div className='flex gap-40'>
      <div className='container flex flex-col'>
        <h1 className='text-3xl text-teal-400 font-bold'>{params.category}</h1>
        <div className='flex-1 flex flex-col justify-center gap-6'>
          {data.map((item) => (
            <div key={item.id}>
              <h1 className='text-5xl font-bold'>{item.title}</h1>
              <p className='text-justify'>{item.desc}</p>
              <Button url='#' text='See More' />
              <div className='flex w-full'>
                <Image src={item.image} width={400} height={500} alt='' className=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category