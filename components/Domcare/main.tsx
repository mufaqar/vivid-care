"use client";

import React from 'react'
import SearchForm from '../HomePage/searchForm'
import AnimateOnScroll, { useAutoDelay } from '../animation'
import { Banner } from '@/lib/queries/GetAbout';
import Image from 'next/image';
import Link from 'next/link';


interface Props {
    data?: Banner;
}
function Main({ data }: Props) {
    const getDelay = useAutoDelay();
    return (
        <section className="min-h-screen bg-gradient-to-r from-[#EAF4FC] to-[#FDEAF3] flex items-center justify-center px-4">
            <div className="container mx-auto md:px-0 px-4 grid md:grid-cols-2 gap-10 items-center mt-20">
                {/* Left Content */}
                <div>
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#111827] mb-6 font-poppins">
                            {data?.title}
                        </h1>
                        <p className="text-[#374151] mb-6 text-xl font-poppins">
                            {data?.description} </p>
                        <SearchForm />
                        <Link href="https://vivid-care-jobs.vercel.app/?open=lead"
                            className="bg-primary hover:bg-secondary text-lg font-bold font-poppins text-white py-4 flex items-center gap-2 justify-center rounded-[50px] md:w-1/3 w-full cursor-pointer mt-10"
                        >
                            Find Career
                        </Link>
                    </AnimateOnScroll>
                </div>
                {/* Right Content - Video Section */}
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <div className="relative border-7 border-white rounded-xl">
                        <Image
                            src={data?.videoPoster?.node?.mediaItemUrl || "/images/domcare-main.png"}
                            alt={data?.videoPoster?.node?.altText || "Elderly care"}
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

export default Main