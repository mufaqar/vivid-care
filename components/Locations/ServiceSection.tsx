"use client";

import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
    title: string;
    desc: string;
    img: string;
    highlight?: boolean;
}

const services: ServiceItem[] = [
    {
        title: "Long Term Care",
        desc: "At Vivid Care, we offer a wide range of long term home care services here in Manchester to manage your health needs and help you maintain independence.",
        img: "/images/service1.png",
    },
    {
        title: "Live-in Care",
        desc: "Discover our professional and flexible home care services in Manchester. Our qualified care team provide specialised live in care to support your specific needs.",
        img: "/images/service2.png",
        highlight: true,
    },
    {
        title: "Palliative Care",
        desc: "Let us help you feel more comfortable and manage that pain. Our expert caregivers at Vivid Care provide quality palliative home care services here in Manchester.",
        img: "/images/service3.png",
    },
    {
        title: "Long Term Care",
        desc: "At Vivid Care, we offer a wide range of long term home care services here in Manchester to manage your health needs and help you maintain independence.",
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
                className="absolute md:-left-4 left-0 top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg rounded-full p-3 z-20"
            >
                <FaArrowLeft className="text-white" />
            </button>

            {/* Slider */}
            <Slider ref={slider} {...settings} className="px-8">
                {services.map((item, index) => (
                    <div key={index} className="p-3">
                        <div className="relative rounded-2xl overflow-hidden shadow-md group md:h-[510px] h-[350px] bg-center bg-no-repeat bg-cover"
                            style={{ backgroundImage: `url(${item.img})` }}
                        >
                            <div className="absolute bottom-0 w-full p-5 h-fit rounded-2xl flex flex-col justify-end
                                    bg-gradient-to-t from-[#071542E5] from-[80%] to-transparent to-[100%]
                                    group-hover:bg-[#071542E5]
                                    transition-all duration-500 ease-in-out 
                                    group-hover:h-full
                                    scale-100 group-hover:scale-90">
                                <div className="pl-5 border-l-6 border-primary transition-all duration-500 ease-in-out">
                                    <h3 className="md:text-[26px] md:leading-none text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    {/* Short Description */}
                                    <p className="mt-2 md:text-base text-sm text-white group-hover:hidden block transition-all duration-300 ease-in-out">
                                        {item.desc.split(" ").slice(0, 11).join(" ")}...
                                    </p>

                                    {/* Full Description */}
                                    <p className="mt-2 md:text-base text-sm text-white group-hover:block hidden transition-all duration-300 ease-in-out">
                                        {item.desc}
                                    </p>
                                </div>

                                <Link href="#enquire"
                                    className="mt-4 bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-4 py-2 md:px-7 px-5 hidden group-hover:flex items-center gap-2 justify-center rounded-[50px] w-full border-2 border-secondary hover:border-primary transition-all duration-500 ease-in-out">
                                    Enquire Now →
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>

            {/* Right Arrow */}
            <button
                onClick={() => slider.current?.slickNext()}
                className="absolute md:-right-4 right-0 top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg rounded-full p-3 z-20"
            >
                <FaArrowRight className="text-white" />
            </button>
        </div>
    );
}
