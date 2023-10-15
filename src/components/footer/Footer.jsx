import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='hidden lg:flex mt-auto h-[1.5rem] justify-between items-center'>
      <div>
        &copy; 2023 fakeNameDev. All Rights Reserved.
      </div>
      <div className='flex gap-3'>
        <Image src='/1.png' className='opacity-76 cursor-pointer' alt='facebook account' width={20} height={20} />
        <Image src='/2.png' className='opacity-76 cursor-pointer' alt='instagram account' width={20} height={20} />
        <Image src='/3.png' className='opacity-76 cursor-pointer' alt='twitter account' width={20} height={20} />
        <Image src='/4.png' className='opacity-76 cursor-pointer' alt='youtube account' width={20} height={20} />
      </div>
    </div>
  )
}

export default Footer