"use client";

import React from 'react'
import SearchForm from '../HomePage/searchForm'
import AnimateOnScroll, { useAutoDelay } from '../animation'

const Banner = ({ data }: any) => {
    const getDelay = useAutoDelay();
    return (
        <section className='pt-16 bg-[url("/images/searchbg.png")] bg-cover bg-center relative'>
            <div className='bg-gradient-to-r from-background to-transparent absolute h-full w-full top-0'></div>
            <div className='container mx-auto md:px-0 px-4 py-16 h-full relative z-1'>
                <div className='flex md:flex-row flex-col gap-6 items-center  h-full'>
                    <div className='md:w-2/3 w-full'>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h1 className='text-4xl md:text-6xl font-semibold text-title mb-6 font-playfair'>
                                {data?.title}
                            </h1>
                            <div
                                className="md:text-[22px] md:leading-normal text-lg font-poppins md:mb-10 mb-6 max-w-[678px]"
                                dangerouslySetInnerHTML={{ __html: data?.excerpt || "" }}
                            />
                        </AnimateOnScroll>
                    </div>
                    <div className='md:w-1/3 w-full'></div>
                </div>
            </div>
            <div className='container mx-auto md:px-0 px-4 h-full static bottom-0'>
                <div className='bg-white rounded-t-[20px] md:p-10 p-7 flex md:flex-row flex-col gap-8 shadow-[0px_20px_60px_0px_rgba(229,233,237,0.4)] relative z-1'>
                    <div className='md:w-1/2 w-full'>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <p className='text-lg font-normal text-desc mb-5'>
                                Everything you need for a quality home care service
                            </p>
                            <h2 className='md:text-[31px] md:leading-none text-2xl font-medium text-title '>
                                We Provide Exceptional Domiciliary Care!
                            </h2>
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