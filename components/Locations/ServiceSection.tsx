"use client";

import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface ServiceItem {
    title: string;
    desc: string;
    img: string;
    highlight?: boolean;
}

const services: ServiceItem[] = [
    {
        title: "Long Term Care",
        desc: "We offer a wide range of long-term home care services tailored to meet your needs.",
        img: "/images/service1.png",
    },
    {
        title: "Live-in Care",
        desc: "Discover our professional and flexible home care services. Our caregivers provide specialised live-in care.",
        img: "/images/service2.png",
        highlight: true,
    },
    {
        title: "Palliative Care",
        desc: "Let us help you feel more comfortable and manage pain with compassionate support.",
        img: "/images/service3.png",
    },
    {
        title: "Long Term Care",
        desc: "We offer a wide range of long-term home care services tailored to meet your needs.",
        img: "/images/service1.png",
    },
];

export default function ServiceSection() {
    const slider = useRef<Slider | null>(null);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="relative w-full py-10">
            {/* Left Arrow */}
            <button
                onClick={() => slider.current?.slickPrev()}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg rounded-full p-3 z-20"
            >
                <FaArrowLeft className="text-white" />
            </button>

            {/* Slider */}
            <Slider ref={slider} {...settings} className="px-8">
                {services.map((item, index) => (
                    <div key={index} className="p-3">
                        <div className="relative rounded-xl overflow-hidden shadow-md group">
                            {/* Image */}
                            <Image
                                src={item.img}
                                className="w-full h-full object-cover"
                                alt={item.title}
                                height={510}
                                width={420}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#173983]/80 opacity-0 group-hover:opacity-100"></div>

                            {/* Text */}
                            <div className="absolute bottom-0 w-full p-5 border-l-6 border-primary bg-gradient-to-t to-red-300 from-[#173983]/80">
                                <h3 className="md:text-[26px] md:leading-none text-xl font-semibold text-white ">{item.title}</h3>
                                <p className="mt-2 md:text-base text-sm text-white">{item.desc}</p>

                                <button className="mt-4 bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-4 py-2 md:px-7 px-5 hidden group-hover:flex items-center gap-2 justify-center rounded-[50px] w-full border-2 border-secondary hover:border-primary">
                                    Enquire Now →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Right Arrow */}
            <button
                onClick={() => slider.current?.slickNext()}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg rounded-full p-3 z-20"
            >
                <FaArrowRight className="text-white" />
            </button>
        </div>
    );
}
