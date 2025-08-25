'use client'
import { navMenu } from '@/data/menu'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [mblMenu, setMblMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Listen for scroll to toggle bg
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full px-5 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'py-2' : 'py-[18px]'
      }`}
    >
      <div className='mx-auto md:px-[2%] px-4 flex md:flex-row flex-row gap-6 items-center justify-between'>
        {/* Logo */}
        <div>
          <Link href="/" className='inline-flex w-fit'>
            <Image src="/images/white_logo.png" alt='logo' width={230} height={55} className='hidden' />
            <Image src="/images/logo.png" alt='logo' width={230} height={55} className='block' />
          </Link>
        </div>

        {/* Nav */}
        <nav className='flex items-center gap-2.5'>
          <ul
            className={`bg-white shadow py-[18px] px-10 md:rounded-[107.06px] rounded-b-4xl md:flex md:flex-row flex-col gap-5 md:static justify-center ${
              mblMenu
                ? 'absolute left-0 right-0 top-0 md:h-auto h-[350px] flex'
                : 'hidden'
            }`}
          >
            {navMenu?.map((item: any, idx: number) => (
              <li key={idx}>
                <Link
                  href={item?.link}
                  className='text-base text-black font-normal hover:text-primary'
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMblMenu(!mblMenu)}
            className='md:hidden inline-flex bg-background md:text-[32px] text-2xl md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300 relative z-50'
          >
            {!mblMenu ? <FaBars /> : <IoClose />}
          </button>

          {/* Phone Button */}
          <Link
            href="#"
            className='inline-flex bg-background md:text-[32px] text-2xl md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300 relative z-50'
          >
            <FaPhone />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
