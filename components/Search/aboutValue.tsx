"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimateOnScroll, { useAutoDelay } from "../animation";

const AboutValue = () => {
    // Store which item is open (by index)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const getDelay = useAutoDelay();
    // Accordion items data
    const items = [
        {
            id: 1,
            title: "Our Leadership",
            desc: `Our director, David Esan, brings a passion for staff development and inclusivity, backed by years of leadership in the tech sector. At Vivid Care, we believe a supported and educated team is the key to delivering outstanding care.`,
        },
        {
            id: 2,
            title: "Our Values",
            desc: `At Vivid Care, our values of integrity, compassion, and respect guide every interaction with clients and staff. We are committed to continuous improvement, ensuring each individual receives care tailored to their unique needs.`,
        },
    ];

    // Toggle open/close
    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="md:py-20 py-16">
            <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 justify-between">
                {/* LEFT SECTION */}
                <div className="md:w-1/2 w-full">
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <h2 className="md:text-5xl text-3xl font-semibold text-title mb-5">
                            About Vivid Care Services
                        </h2>
                        <p className="text-lg font-normal text-desc mb-6">
                            Here at Vivid Care, we believe in a client-centered approach to caregiving.
                            Our story dates back to 2005, when we established our core principles and values
                            of integrity, compassion, and an attentive nature.
                        </p>
                    </AnimateOnScroll>
                    {/* ACCORDION ITEMS */}
                    <div className="space-y-6">
                        {items.map((item, index) => (
                            <AnimateOnScroll  key={item.id} type="fade-up" delay={getDelay()}>
                                <div className="relative bg-white rounded-[10px] shadow-[0px_10px_10px_10px_rgba(1,72,112,0.1)] md:px-9 px-5 py-4 transition-all duration-300 ease-in-out"
                                >
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[85%] w-[6px] bg-primary rounded-r-lg rounded-br-lg"></div>

                                    <h3 onClick={() => toggle(index)}
                                        className="md:text-2xl text-xl font-semibold text-title cursor-pointer">
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`text-lg font-normal text-desc mt-3 transition-all duration-300 ${openIndex === index ? "block" : "hidden"
                                            }`}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <div className="flex md:flex-row flex-col gap-6 items-center mt-10">
                                <Link href="#" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-secondary hover:border-primary'>
                                    Request a Call Back <FaArrowRightLong />
                                </Link>
                                <Link href="#" className='bg-transparent hover:bg-secondary md:text-lg text-sm font-semibold font-poppins text-secondary hover:text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-secondary'>
                                    Learn More <FaArrowRightLong />
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="md:w-1/2 w-full">
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <Image
                            src="/images/support.png"
                            alt="support"
                            width={655}
                            height={608}
                            className="w-full h-auto object-cover"
                        />
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default AboutValue;
