"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { ButtonAlert } from './button-alert'

const Navbar = () => {
  const [isRouting, setisRouting] = useState(false)
  const path = usePathname()
  const [prevPath, setPrevPath] = useState("/")
  const [isActive, setIsActive] = useState(false)

  const handleHamburgerClick = ()=>{
    setIsActive(!isActive)
  }

  useEffect(()=>{
      if(prevPath !== path){
        setIsActive(false);
        setisRouting(true)
      }
  }, [path, prevPath])

  useEffect(()=>{
      if(isRouting){
          setPrevPath(path)
          const timeout = setTimeout(()=>{
              setisRouting(false)
          }, 1200)

          return()=>clearTimeout(timeout)
      }
  }, [isRouting])

  const NavLinks = [
      {
        link: "beranda",
        name:"Beranda"
      },
      {
        link: "fitur",
        name:"Fitur",
      },
      {
        link: "faq",
        name:"FAQ"
      },
      {
        link: "kontak",
        name:"Kontak"
      },

  ]
  return (
    <nav className='navbar-fixed top-0 w-full z-[10] relative'>
        <div className='flex flex-wrap justify-between max-w-7xl mx-auto px-8 lg:px-24 md:px-16 py-4 items-center'>
            <div>
                <Link
                key="beranda"
                href="#beranda"
                className='flex flex-wrap gap-4'
                >
                    <Image
                    className='w-6 lg:w-8'
                    src="/zenspire-logo.png"
                    alt='zenspire-logo'
                    width={288}
                    height={162}
                    />
                    <p className='text-[#12719C] font-bold text-xl lg:text-2xl'>Zenspire</p>
                </Link> 
            </div>
            <div className='hidden md:flex flex-wrap gap-12'>
                {isRouting}
                {NavLinks.map((nav)=>(
                    <Link
                    key={nav.name}
                    className={`text-[#12719C] hover:font-semibold hover:underline hover:underline-offset-8 transition-all ease-in-out`}
                    href={`#${nav.link}`}>{nav.name}</Link>
                ))}
            </div>
            <div className='flex items-center px-4 md:hidden'>
                <button id='hamburger' name='hamburger' type='button' className={`block absolute right-4 ${isActive ?'hamburger-active' :''}`} onClick={handleHamburgerClick}>
                    <span className='w-[30px] h-[2px] my-2 block bg-[#12719C] transition duration-500 ease-out origin-top-left'></span>
                    <span className='w-[30px] h-[2px] my-2 block bg-[#12719C] transition duration-500 ease-out'></span>
                    <span className='w-[30px] h-[2px] my-2 block bg-[#12719C] transition duration-500 ease-out origin-bottom-left'></span>
                </button>
                <div className={`nav-menu absolute z-[10] py-5 rounded-b-3xl w-full right-0 top-full ${!isActive ? 'hidden' : ''}`}>
                    <div className='flex flex-col gap-3 px-8'>
                        {isRouting}
                        {NavLinks.map((nav)=>(
                        <Link
                        key={nav.name}
                        className={`text-[#12719C] hover:font-semibold hover:underline hover:underline-offset-4 transition-all ease-in-out`}
                        href={`#${nav.link}`}>{nav.name}</Link>
                        ))}
                        <ButtonAlert className="px-4 py-2 bg-[#12719C] rounded-full text-white hover:bg-[#12709cd7] transition-all text-sm w-fit" value="Unduh Aplikasi"/>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <ButtonAlert className='px-4 py-2 bg-[#12719C] rounded-full text-white hover:bg-[#12709cd7] transition-all text-sm' value="Unduh Aplikasi"/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar