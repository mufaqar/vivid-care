'use client'
import { navMenu } from '@/data/menu'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

const Header = () => {
    const [mblMenu, setMblMenu] = useState(false)
    return (
        <header className='fixed w-full py-[18px] px-5 z-40'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-row gap-6 items-center justify-between'>
                <div>
                    <Link href="/" className='inline-flex w-fit'>
                        <Image src="/images/white_logo.png" alt='logo' width={230} height={55} className='hidden' />
                        <Image src="/images/logo.png" alt='logo' width={230} height={55} className='block' />
                    </Link>
                </div>
                <nav className='flex items-center gap-2.5'>
                    <ul className={`bg-white py-[18px] px-10 md:rounded-[107.06px] rounded-b-4xl md:flex md:flex-row flex-col gap-5 md:static justify-center  ${mblMenu === true ? "absolute left-0 right-0 top-0 md:h-auto h-[350px] flex" : " hidden"}`}>
                        {navMenu?.map((item: any, idx: number) => (
                            <li key={idx}>
                                <Link href={item?.link} className='text-base text-black font-normal hover:text-primary'>
                                    {item?.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setMblMenu(!mblMenu)} className='md:hidden inline-flex bg-background md:text-[32px] text-2xl md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300 relative z-50'>
                        {!mblMenu ? <FaBars /> : <IoClose />}
                    </button>
                    <Link href="#" className='inline-flex bg-background md:text-[32px] text-2xl md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300 relative z-50'>
                        <FaPhone />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header