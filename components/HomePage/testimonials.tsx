import Image from 'next/image'
import React from 'react'
import ReviewBox from '../reviews/reviewBox'
import { testimonials } from '@/data/testimonialsData'

const Testimonials = () => {
    return (
        <section className='bg-background md:py-20 py-16'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col gap-5 items-center'>
                <div className='flex gap-2.5 items-center md:w-1/2 w-full'>
                    <Image src="/images/rating.png" alt='rating' width={78} height={78} />
                    <h2 className='md:text-[36px] md:leading-none text-2xl font-semibold text-black font-playfair tracking-[-0.6] capitalize'>
                        homecare.co.uk Review Score for Vivid Care Services
                    </h2>
                </div>
                <div className='md:w-1/2 w-full flex justify-end'>
                    <Image src="/images/homecare.png" alt='homecare' width={278} height={49} />
                </div>
            </div>
            <div className='container mx-auto md:px-0 px-4 grid md:grid-cols-3 grid-cols-1 gap-5 mt-14'>
                {testimonials.map((item, idx) => (
                    <ReviewBox key={idx} data={item} />
                ))}

            </div>
        </section>
    )
}

export default Testimonials