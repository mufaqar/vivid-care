"use client";

import React from 'react'
import SearchForm from '../HomePage/searchForm'
import AnimateOnScroll, { useAutoDelay } from '../animation'

const Banner = () => {
    const getDelay = useAutoDelay();
    return (
        <section className='min-h-screen pt-16 flex justify-center items-end bg-[url("/images/searchbg.png")] bg-cover bg-center'>
            <div className='container mx-auto md:px-0 px-4'>
                <div className='bg-white rounded-t-[20px] md:p-10 p-7 flex md:flex-row flex-col gap-8 shadow-[0px_20px_60px_0px_rgba(229,233,237,0.4)]'>
                    <div className='md:w-1/2 w-full'>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h1 className='md:text-[38px] md:leading-none text-2xl font-semibold text-title mb-5'>
                                Find Trusted Carers Near You
                            </h1>
                            <p className='text-lg font-normal text-desc'>
                                Simply let us know what kind of support you’re looking for, and we’ll connect you with a qualified carer in your area
                            </p>
                        </AnimateOnScroll>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <SearchForm />
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner