"use client"

import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div onClick={toggle} className='relative w-[3.2rem] h-[1.6rem] border border-teal-700 rounded-2xl flex gap-1 py-1 justify-center items-center cursor-pointer'>
      <div className='text-sm'>🌙</div>
      <div className='text-sm'>🔆</div>
      <div className='w-[1.3rem] h-[1.3rem] bg-teal-400 rounded-[50%] absolute' style={mode === 'light' ? { right: "0.15rem" } : { left: "0.15rem" }}></div>

    </div>
  )
}

export default DarkModeToggle