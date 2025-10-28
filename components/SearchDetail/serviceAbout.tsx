"use client";

import { Service } from '@/lib/gql-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdPhoneInTalk } from 'react-icons/md'
import AnimateOnScroll, { useAutoDelay } from '../animation'

interface Props {
    data?: Service | null,

}
const ServiceAbout = ({ data }: Props) => {
    const getDelay = useAutoDelay();
    return (
        <section className="md:py-20 py-16">
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 '>
                <div className="md:w-1/2 w-full">
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <div className="service_Content"
                            dangerouslySetInnerHTML={{ __html: data?.serviceInfo?.serviceAbout?.serviceDetail || "" }} />
                    </AnimateOnScroll>
                </div>
                <div className="md:w-1/2 w-full bg-gradient-to-b from-[#DFF7FF] bg-[#9FE8FF] px-10 pt-10 rounded-[20px]">
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <h2 className='md:text-5xl text-3xl font-semibold text-title mb-8'>
                            Need Help?
                        </h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <ul className='space-y-8 mb-10'>
                            <li className='flex md:flex-row flex-col gap-5 items-center'>
                                <span className='md:text-3xl text-xl flex md:w-[64px] md:h-[64px] w-[32px] h-[32px] justify-center items-center text-title bg-white rounded-full'>
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
                                <span className='md:text-3xl text-xl flex md:w-[64px] md:h-[64px] w-[32px] h-[32px] justify-center items-center text-title bg-white rounded-full'>
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
                        <Link href="#" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit relative z-10'>
                            Request a Call Back <FaArrowRightLong />
                        </Link>
                    </AnimateOnScroll>
                    <Image src="/images/help.png" alt='help' width={500} height={478} className='ml-auto mr-0 mt-[-60px]' />
                </div>
            </div>
            <div className='container mx-auto md:px-0 px-4 md:mt-20 mt-10'>
                <div className='bg-[#D5F4FF] p-4 rounded-[10px]'>
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <div className="md:text-lg text-sm font-normal text-desc "
                            dangerouslySetInnerHTML={{ __html: data?.excerpt || "" }} />
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    )
}

export default ServiceAbout