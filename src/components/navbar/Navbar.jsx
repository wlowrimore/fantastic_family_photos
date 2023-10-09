"use client";

import Link from 'next/link'
import React from 'react'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6'>
      <Link href='/' className='text-2xl font-semibold'>LOGO HERE</Link>
      <div className='flex items-center gap-6'>
        {links.map(link => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        <button
          className='py-1 px-2 border-none rounded-md bg-teal-400 text-neutral-950'
          onClick={() => { console.log('logged out"') }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar