"use client";
import Image from 'next/image'
import React from 'react'
import AnimateOnScroll, { useAutoDelay } from '../animation'

function Partners() {
    const getDelay = useAutoDelay();
    return (
        <section className='pt-16'>
            <div className='container mx-auto px-4'>
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <p className='text-base font-medium text-black text-center font-poppins mb-10'>
                        As Trusted By
                    </p>
                </AnimateOnScroll>
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <div className='flex md:flex-row flex-col items-center justify-center gap-6'>
                        <Image src="/images/partner1.png" alt="partner1" width={63} height={65} />
                        <Image src="/images/partner2.png" alt="partner2" width={271} height={57} />
                        <Image src="/images/partner3.png" alt="partner3" width={208} height={61} />
                        <Image src="/images/partner4.png" alt="partner4" width={167} height={55} />
                        <Image src="/images/partner5.png" alt="partner5" width={112} height={57} />
                    </div>
                </AnimateOnScroll>
                <div className='border-b border-black/15 my-16'></div>
            </div>
        </section>
    )
}

export default Partners