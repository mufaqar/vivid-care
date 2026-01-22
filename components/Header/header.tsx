'use client'
import { navMenu } from '@/data/menu'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Import usePathname
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import CircleRotating from '../circleRotating'

const Header = () => {
  const [mblMenu, setMblMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const pathname = usePathname() // Get current pathname

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

  // Determine if the current page is the home page
  const isHomePage = pathname === '/'

  return (
    <header
      className={`fixed w-full z-[999] transition-all duration-500 ease-in-out ${isScrolled ? 'py-2 bg-primary' : 'py-[18px]'
        } ${mblMenu && 'bg-primary'}`}
    >
      <div className="mx-auto md:px-[2%] px-4 flex md:flex-row flex-row gap-6 items-center justify-between">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="inline-flex w-fit group"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <Image
              src={
                isHomePage
                  ? isScrolled
                    ? '/images/white_logo.png'
                    : isLogoHovered
                      ? '/images/logo.png'
                      : '/images/white_logo.png'
                  : '/images/logo.png' // Use logo.png for all non-home pages
              }
              alt="logo"
              width={230}
              height={55}
              className="inline-block transition-opacity duration-300"
            />
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex items-center gap-2.5">
          <ul
            className={`${isScrolled ? 'bg-transparent' : 'bg-white shadow'
              } py-[18px] px-10 md:rounded-[107.06px] rounded-b-4xl md:flex md:flex-row flex-col gap-5 md:static justify-center ${mblMenu
                ? 'absolute left-0 right-0 top-[65.3px] md:h-auto h-[350px] flex bg-white'
                : 'hidden'
              }`}
          >
            {navMenu?.map((item: any, idx: number) => (
              <li key={idx}>
                <Link
                  href={item?.link}
                  className={`${isScrolled ? 'md:text-white hover:text-secondary' : 'text-black hover:text-primary'
                    } text-base font-normal font-poppins`}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMblMenu(!mblMenu)}
            className="md:hidden inline-flex bg-background md:text-[32px] text-2xl md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full items-center justify-center text-secondary transition-all duration-300 relative z-50 border-2 border-secondary group"
          >
            <CircleRotating bgColor="#fef1f7" size="h-[calc(100%+5px)] w-[calc(100%+5px)]" />
            {!mblMenu ? <FaBars className="relative z-10" /> : <IoClose className="relative z-10" />}
          </button>

          {/* Phone Button */}
          <Link
            href="tel:03333399946"
            className="inline-flex bg-background md:text-[32px] text-2xl md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full items-center justify-center text-secondary transition-all duration-300 relative z-50 border-2 border-secondary group"
          >
            <CircleRotating bgColor="#fef1f7" size="h-[calc(100%+5px)] w-[calc(100%+5px)]" />
            <FaPhone className="relative z-10" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header