"use client";
import Image from 'next/image'
import React from 'react'
import ReviewBox from '../reviews/reviewBox'
import { testimonials } from '@/data/testimonialsData'
import AnimateOnScroll, { useAutoDelay } from '../animation'
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Review } from '@/lib/gql-types';


interface Props {
    data: Review[],
}
const Testimonials = ({data}:Props) => {
    const getDelay = useAutoDelay();
    return (
        <section className='bg-background md:py-20 py-16'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col gap-5 items-center'>
                <div className='flex gap-2.5 items-center md:w-1/2 w-full'>
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <h2 className='md:text-5xl text-3xl font-semibold text-title'>
                            homecare.co.uk Review Score for Vivid Care Services
                        </h2>
                    </AnimateOnScroll>
                </div>

                <div className='md:w-1/2 w-full flex md:justify-end'>
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <Link href="#" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit'>
                            Enquire Now <FaArrowRightLong />
                        </Link>
                    </AnimateOnScroll>
                </div>
            </div>
            <div className='container mx-auto md:px-0 px-4 grid md:grid-cols-3 grid-cols-1 gap-5 mt-14'>
                {data?.map((item, idx) => (
                    <AnimateOnScroll key={idx} type="fade-up" delay={getDelay()}>
                        <ReviewBox testimonial={item} />
                    </AnimateOnScroll>
                ))}
            </div>
            <div className='container mx-auto md:px-0 px-4 md:mt-16 mt-10'>
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                <h3 className='md:text-[28px] md:leading-normal text-2xl font-medium text-title text-center mb-2.5'>
                    Average Customer Rating of <span className='text-[#F6A20A]'> 8.5 out of 10! </span>
                </h3>
                <div className='flex justify-center items-center'>
                    <Image src="/images/homecare.png" alt='homecare' width={151} height={28} />
                    <p className='md:text-xl text-lg font-normal text-title '>
                        From <span className='text-[#F6A20A]'> 1,500+ </span> Customer Reviews
                    </p>
                </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}

export default Testimonials