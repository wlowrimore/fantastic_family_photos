import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react'
import { items } from './data.js';
import { notFound } from 'next/navigation.js';

import './cat.css';

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
    <div className='container'>
      <div className='flex flex-col'>
        <h1 className='text-3xl text-teal-400 font-bold'>{params.category}</h1>
        <div className='flex-1 flex flex-col justify-center gap-6'>
          {data.map((item) => (
            <div key={item.id} className='item'>
              <div className='flex w-full'>
                <Image src={item.image} width={600} height={500} alt='' className=""
                />
              </div>
              <div className='flex flex-col justify-center gap-y-8'>
                <h1 className='text-6xl font-bold'>{item.title}</h1>
                <p className='text-justify w-3/4 text-xl tracking-wide'>{item.desc}</p>
                <Button url='#' text='See More' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category