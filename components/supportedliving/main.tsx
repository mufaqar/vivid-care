import React from 'react'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'
import { FaEnvelope, FaStar } from 'react-icons/fa'
import { MdPhoneInTalk } from 'react-icons/md'

function Main() {
    return (
        <section className="min-h-screen md:py-20 py-16 bg-gradient-to-r from-background to-transparent flex items-center justify-center">
            <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col gap-10 items-center justify-between mt-20">
                {/* Left Content */}
                <div className='max-w-[653px]'>
                    <h1 className="text-4xl md:text-6xl font-semibold text-title mb-6 font-playfair">
                        Trusted Carers for Your Loved Ones
                    </h1>
                    <p className="md:text-[22px] md:leading-normal text-lg font-poppins md:mb-10 mb-6">
                        We provide compassionate and reliable home care services tailored to your individual needs.
                    </p>
                    <Link href="#" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit'>
                        Request a Call Back <FaArrowRightLong />
                    </Link>
                    <div className='md:mt-[130px] mt-10 flex md:flex-row flex-col items-center gap-8 max-w-[506px]'>
                        <ul className='flex border border-secondary/20 w-fit rounded-full p-2.5'>
                            <li>
                                <Image src="/images/user.jpg" alt='user' width={70} height={70} className='rounded-full border-2 border-white' />
                            </li>
                            <li className='w-fit -ml-5'>
                                <Image src="/images/user.jpg" alt='user' width={70} height={70} className='rounded-full border-2 border-white' />
                            </li>
                            <li className='w-fit -ml-5'>
                                <Image src="/images/user.jpg" alt='user' width={70} height={70} className='rounded-full border-2 border-white' />
                            </li>
                            <li className='w-fit -ml-5'>
                                <Image src="/images/user.jpg" alt='user' width={70} height={70} className='rounded-full border-2 border-white' />
                            </li>
                        </ul>
                        <div className=''>
                            <p className='text-base font-medium text-title flex items-center'>
                                <span className='w-[42px] h-[42px] bg-[#F6A20A] text-white text-2xl inline-flex items-center justify-center rounded-full mr-2.5'> <FaStar /></span>
                                <span>Average homecare.co.uk <br />Rating of <span className='text-[#F6A20A]'>8.5 out of 10!</span></span>
                            </p>
                            <p className='text-base font-medium text-title mt-2.5'>
                                From <span className='text-[#F6A20A]'>1500+ </span>Customer Reviews
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Content - Video Section */}
                <div className="h-full flex items-end">
                    <ul className='bg-white rounded-2xl border-l-4 border-secondary md:p-[30px] p-5 w-fit space-y-6'>
                        <li className='flex md:flex-row flex-col gap-5 items-center'>
                            <span className='md:text-3xl text-xl flex md:w-[70px] md:h-[70px] w-[32px] h-[32px] justify-center items-center text-secondary bg-background rounded-full'>
                                <MdPhoneInTalk />
                            </span>
                            <span className='flex flex-col'>
                                <span className='text-base font-normal text-title'>Call Us Now:</span>
                                <Link href="tel:03333399946" className='md:text-xl text-base font-medium text-title'>
                                    0333 339 9946
                                </Link>
                            </span>
                        </li>
                        <li className='flex md:flex-row flex-col gap-5 items-center'>
                            <span className='md:text-3xl text-xl flex md:w-[70px] md:h-[70px] w-[32px] h-[32px] justify-center items-center text-secondary bg-background rounded-full'>
                                <FaEnvelope />
                            </span>
                            <span className='flex flex-col'>
                                <Link href="mailto:info@vividcareservices.co.uk" target='_blank' className='md:text-xl text-base font-medium text-title'>
                                    info@vividcareservices.co.uk
                                </Link>
                                <Link href="mailto:recruitment@vividcareservices.co.uk" target='_blank' className='md:text-xl text-base font-medium text-title'>
                                    recruitment@vividcareservices.co.uk
                                </Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Main