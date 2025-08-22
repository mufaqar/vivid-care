import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa6'
import { GrPhone } from 'react-icons/gr'

const GetInTouch = () => {
    return (
        <section className='bg-background py-10'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col items-center md:gap-[140px] gap-6 justify-center'>
                <h2 className='md:text-4xl text-2xl font-medium text-secondary tracking-[-0.6] font-poppins'>
                    Get In Touch
                </h2>
                <div>
                    <ul className='flex items-center divide-x divide-secondary'>
                        <li className='flex flex-col justify-center items-center group md:px-10 px-8 relative'>
                            <span className='transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 text-base font-semibold text-black text-center font-poppins inline-flex justify-center items-center w-fit rounded-lg bg-white shadow-[0_4px_6px_-2px_rgba(16,24,40,0.0784)] py-2 px-3 absolute top-[-50] 
                            before:content-[" "] before:absolute before:w-[14px] before:h-[14px] before:bg-white before:rotate-140 before:mb-[-36px] before:z-0'>
                                Call Us
                            </span>
                            <Link href="#" className='md:text-3xl text-xl flex md:w-[50px] md:h-[50px] w-[32px] h-[32px] justify-center items-center text-secondary border-2 border-secondary rounded-full'>
                                <GrPhone />
                            </Link>
                        </li>
                        <li className='flex flex-col justify-center items-center group md:px-10 px-8 relative'>
                            <span className='transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 text-base font-semibold text-black text-center font-poppins inline-flex justify-center items-center w-fit rounded-lg bg-white shadow-[0_4px_6px_-2px_rgba(16,24,40,0.0784)] py-2 px-3 absolute top-[-50] 
                            before:content-[" "] before:absolute before:w-[14px] before:h-[14px] before:bg-white before:rotate-140 before:mb-[-36px] before:z-0'>
                                Mail Us
                            </span>
                            <Link href="#" className='md:text-3xl text-xl flex md:w-[50px] md:h-[50px] w-[32px] h-[32px] justify-center items-center text-secondary border-2 border-secondary rounded-full'>
                                <FaRegEnvelope />
                            </Link>
                        </li>
                        <li className='flex flex-col justify-center items-center group md:px-10 px-8 relative'>
                            <span className='transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 text-base font-semibold text-black text-center font-poppins inline-flex justify-center items-center w-[134px] rounded-lg bg-white shadow-[0_4px_6px_-2px_rgba(16,24,40,0.0784)] py-2 px-3 absolute top-[-50] 
                            before:content-[" "] before:absolute before:w-[14px] before:h-[14px] before:bg-white before:rotate-140 before:mb-[-36px] before:z-0'>
                                WhatsApp Us
                            </span>
                            <Link href="#" className='md:text-3xl text-xl flex md:w-[50px] md:h-[50px] w-[32px] h-[32px] justify-center items-center text-secondary border-2 border-secondary rounded-full'>
                                <FaWhatsapp />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch