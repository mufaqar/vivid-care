"use client";
import { teamData } from '@/data/teamData'
import Image from 'next/image'
import React, { useRef } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Slider from 'react-slick'

const Team = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:items-center justify-between gap-10 md:mb-16 mb-8">
                <div className='md:w-1/2 w-full'>
                    <h2 className="md:text-5xl text-3xl font-semibold text-title max-w-[506px]">
                        Meet The Team
                    </h2>
                </div>
                <div className='md:w-1/2 w-full flex items-center justify-end gap-5'>
                    <button
                        onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button
                        onClick={() => sliderRef.current && sliderRef.current.slickNext()}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                    >
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
            <div className='container mx-auto md:px-0 px-4'>
                <Slider ref={sliderRef} {...settings}>
                    {teamData.map((member) => (
                        <div key={member.id} className="px-3">
                            <div className="bg-white shadow-[10px_10px_60px_0px_rgba(0,0,0,0.04),_inset_0px_-4px_0px_0px_rgba(18,154,206,1)]  rounded-2xl text-center p-6 transition">
                                <div className="w-[320px] h-[320px] mx-auto mb-4 rounded-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="md:text-[28px] text-2xl font-semibold text-title text-center mb-5 mt-10">
                                    {member.name}
                                </h3>
                                <p className="md:text-lg text-sm font-normal text-desc text-center">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Team