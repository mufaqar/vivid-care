"use client";

import React from 'react'
import SearchForm from '../HomePage/searchForm'
import AnimateOnScroll, { useAutoDelay } from '../animation'
import Image from 'next/image';

interface Props {
    data?: any;
}

const Banner = ({ data }: Props) => {
    const getDelay = useAutoDelay();
    return (
        <section className="min-h-screen bg-gradient-to-r from-[#EAF4FC] to-[#FDEAF3] flex items-center justify-center px-4">
            <div className="container mx-auto md:px-0 px-4 grid md:grid-cols-2 gap-10 items-center mt-20">
                <div>
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <h1 className="text-2xl md:text-4xl font-bold text-title mb-6 font-poppins">
                            {data?.title}
                        </h1>
                        <div className='text-lg font-normal text-desc mb-7'
                            dangerouslySetInnerHTML={{ __html: data?.excerpt || "" }} />
                        <SearchForm />
                    </AnimateOnScroll>
                </div>
                {/* Right Content - Video Section */}
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <div className="relative border-7 border-white rounded-xl">
                        <Image
                            src={data?.featuredImage?.node?.sourceUrl || '/images/CareForSection.png'}
                            alt={data?.featuredImage?.node?.altText || "Elderly care"}
                            width={400}
                            height={400}
                            className="rounded-xl shadow-lg h-96 w-full object-cover "
                        />
                        {/* Overlay button */}
                        <button className="absolute inset-0 rounded-xl bg-black/50 flex flex-col items-center justify-center text-white">
                            <div className="bg-white bg-opacity-80 hover:bg-opacity-100 transition rounded-full p-3 cursor-pointer">
                                <svg
                                    className="w-10 h-10 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M6 4l10 6-10 6V4z" />
                                </svg>
                            </div>
                            <p className="mt-2 text-md  font-semibold font-poppins">Watch our story ·<br /> 2:30</p>
                        </button>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}

export default Banner