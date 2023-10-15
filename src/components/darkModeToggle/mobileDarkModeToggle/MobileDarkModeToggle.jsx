"use client"

import React, { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext';
const MobileDarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div onClick={toggle} className='relative w-[2.2rem] h-[0.6rem] flex gap-1 mt-2 justify-center items-center cursor-pointer'>
      <div className='text-xs'>🌙</div>
      <div className='text-xs'>🔆</div>
      <div className='w-[1rem] h-[1rem] bg-teal-400 rounded-[50%] absolute' style={mode === 'light' ? { right: "0.1rem" } : { left: "0.1rem" }}></div>

    </div>
  )
}

export default MobileDarkModeToggle