"use client";

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

import './Navbar.css';
import MobileDarkModeToggle from '../darkModeToggle/mobileDarkModeToggle/MobileDarkModeToggle';
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
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
  const [color, setColor] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    const changeHeaderColor = () => {
      if (window.scrollY >= 80) {
        setColor(true)
      } else {
        setColor(false)
      }
    };
    window.addEventListener("scroll", changeHeaderColor);
  }, [])

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }

  return (
    <>
      <div className={color ? 'lg:hidden w-full fixed z-10 flex flex-col justify-center items-center header-bg' : 'lg:hidden fixed left-[6.5rem] z-10 flex flex-col justify-center items-center'}>
        <Link href='/' className='text-3xl font-semibold'>REWTZ</Link>
        <div className='flex mt-4 gap-4'>
          <MobileDarkModeToggle />
          {session.status === 'authenticated' && (
            <button
              className='px-2 m-0 text-purple-500'
              onClick={signOut}
            >
              logout
            </button>
          )}
        </div>
        <div className='fixed z-10 bottom-0'>
          <ul className='grid grid-cols-3 gap-4 items-center justify-center bg-neutral-700 border-t border-neutral-400 py-4 bg-neutral-700 text-teal-100 w-screen px-4'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/blog'><li>Blog</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
            <Link href='/dashboard'><li>Dashboard</li></Link>
          </ul>
        </div>
      </div>
      <div className='hidden lg:flex justify-between items-center py-6'>
        <Link href='/' className='text-2xl font-semibold'>REWTZ</Link>
        <div className='flex items-center gap-6'>
          <DarkModeToggle />
          {links.map(link => (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          ))}
          {session.status === 'authenticated' && (
            <button
              className='py-1 px-2 border-none rounded-md bg-teal-400 text-neutral-950'
              onClick={signOut}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar