"use client";

import React from 'react'
import Banner from './banner'
import Image from 'next/image'
import AnimateOnScroll, { useAutoDelay } from '../animation'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import Testimonials from '../Search/testimonials';
import { FaCheckCircle, FaClock, FaEnvelope } from 'react-icons/fa';
import { MdPhoneInTalk } from 'react-icons/md';
import LocationForm from './LocationForm';
import ServiceSection from './ServiceSection';

const LocContent = ({ reviews, location }: any) => {
    const getDelay = useAutoDelay();
    const locData = location?.locationInfo;
    return (
        <>
            <Banner data={location} />
            <section className="md:py-20 py-16">
                <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 items-center justify-between">
                    {/* LEFT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <Image
                                src={locData?.welcomeContent?.image?.node?.mediaItemUrl || "/images/support.png"}
                                alt="support"
                                width={655}
                                height={608}
                                className="w-full h-auto object-cover rounded-[20px]"
                            />
                        </AnimateOnScroll>
                    </div>
                    {/* RIGHT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h2 className='md:text-[32px] md:leading-none text-2xl font-medium text-title mb-5'>
                                {locData?.welcomeContent?.subtitle}
                            </h2>
                            <h2 className="md:text-5xl text-3xl font-semibold text-title mb-5">
                                {locData?.welcomeContent?.title}
                            </h2>
                            <div
                                className="service_Content"
                                dangerouslySetInnerHTML={{ __html: locData?.welcomeContent?.description || "" }}
                            />

                        </AnimateOnScroll>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <div className="flex md:flex-row flex-col gap-6 items-center mt-10">
                                <Link href="/contact-us" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-secondary hover:border-primary'>
                                    Request a Call Back <FaArrowRightLong />
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            <section className="md:py-20 py-16">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="md:w-3/5 w-full mx-auto">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h2 className='md:text-5xl text-3xl font-semibold text-title text-center mb-5'>
                                {locData?.locationservices?.title}
                            </h2>
                            <div
                                className="service_Content text-center"
                                dangerouslySetInnerHTML={{ __html: locData?.locationservices?.description || "" }}
                            />
                        </AnimateOnScroll>
                    </div>
                    <ServiceSection data={locData?.locationservices?.services} />
                </div>
            </section>
            <Testimonials data={reviews} />
            <section className="md:py-20 py-16">
                <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 items-center justify-between">
                    {/* LEFT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h2 className="md:text-5xl text-3xl font-semibold text-title mb-5">
                                {locData?.serviceQuality?.title}
                            </h2>
                            <div
                                className="service_Content"
                                dangerouslySetInnerHTML={{ __html: locData?.serviceQuality?.description || "" }}
                            />
                        </AnimateOnScroll>
                    </div>
                    {/* RIGHT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <Image
                                src={locData?.serviceQuality?.image?.node?.mediaItemUrl || "/images/support.png"}
                                alt="support"
                                width={655}
                                height={608}
                                className="w-full h-auto object-cover rounded-[20px]"
                            />
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            <section className="md:pb-20 pb-16">
                <div className='bg-primary p-4 rounded-[10px] container mx-auto md:px-10 px-7 md:py-8 py-7 flex md:flex-row flex-col gap-6 items-center'>
                    <div className='md:w-1/2 w-full'>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <p className='text-lg font-normal text-white mb-5'>
                                Everything you need to support you in family caregiver
                            </p>
                            <h3 className='md:text-[32px] md:leading-none text-2xl font-medium text-white mb-5'>
                                We provide exceptional care
                            </h3>
                        </AnimateOnScroll>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <div className="flex md:flex-row flex-col gap-6 items-center md:justify-end mt-10">
                                <Link href="/contact-us" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-secondary hover:border-white'>
                                    Enquire Now <FaArrowRightLong />
                                </Link>
                                <Link href="/contact-us"
                                    className="bg-transparent hover:bg-secondary md:text-lg text-sm font-semibold font-poppins text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-white hover:border-secondary"
                                >
                                    Request a Call Back <FaArrowRightLong />
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            <section className="md:py-20 py-16">
                <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 items-center justify-between">
                    {/* LEFT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <Image
                                src={locData?.serviceBenefit?.image?.node?.mediaItemUrl || "/images/support.png"}
                                alt="support"
                                width={655}
                                height={608}
                                className="w-full h-auto object-cover rounded-[20px]"
                            />
                        </AnimateOnScroll>
                    </div>
                    {/* RIGHT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h2 className="md:text-5xl text-3xl font-semibold text-title mb-5">
                                {locData?.serviceBenefit?.title}
                            </h2>
                            <div
                                className="serviceBenefit mb-6"
                                dangerouslySetInnerHTML={{ __html: locData?.serviceBenefit?.description || "" }}
                            />
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            <section id='enquire' className="md:py-20 py-16 md:px-0 px-4">
                <div className="container mx-auto md:p-[50px] p-8 flex md:flex-row flex-col md:gap-10 gap-6 items-center justify-between border border-[#E7EBF5] rounded-[20px] shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.22)] ">
                    {/* LEFT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h2 className="md:text-5xl text-3xl font-semibold text-title mb-5">
                                Have Questions? <br />Get in Touch!
                            </h2>
                            <p className="text-lg font-normal text-desc mb-6">
                                Fill up the form our team will get back to you within 24 Hours
                            </p>
                            <ul className='space-y-6 mt-12'>
                                <li className='flex md:flex-row flex-col gap-5 items-center'>
                                    <span className='md:text-3xl text-xl flex md:w-[70px] md:h-[70px] w-[32px] h-[32px] justify-center items-center text-primary bg-primary/10 rounded-full'>
                                        <MdPhoneInTalk />
                                    </span>
                                    <span className='flex flex-col md:items-start items-center'>
                                        <span className='text-base font-normal text-desc'>Phone Number</span>
                                        <Link href="tel:03333399946" className='md:text-xl text-base font-medium text-title'>
                                            0333 339 9946
                                        </Link>
                                    </span>
                                </li>
                                <li className='flex md:flex-row flex-col gap-5 items-center'>
                                    <span className='md:text-3xl text-xl flex md:w-[70px] md:h-[70px] w-[32px] h-[32px] justify-center items-center text-primary bg-primary/10 rounded-full'>
                                        <FaEnvelope />
                                    </span>
                                    <span className='flex flex-col md:items-start items-center'>
                                        <Link href="mailto:info@vividcareservices.co.uk" target='_blank' className='md:text-xl text-base font-medium text-title'>
                                            info@vividcareservices.co.uk
                                        </Link>
                                        <Link href="mailto:recruitment@vividcareservices.co.uk" target='_blank' className='md:text-xl text-base font-medium text-title'>
                                            recruitment@vividcareservices.co.uk
                                        </Link>
                                    </span>
                                </li>
                                <li className='flex md:flex-row flex-col gap-5 items-center'>
                                    <span className='md:text-3xl text-xl flex md:w-[70px] md:h-[70px] w-[32px] h-[32px] justify-center items-center text-primary bg-primary/10 rounded-full'>
                                        <FaClock />
                                    </span>
                                    <span className='flex flex-col md:items-start items-center'>
                                        <span className='md:text-xl text-base font-medium text-title'>
                                            Mon-Fri: 9:00am – 5:00pm
                                        </span>
                                        <span className='md:text-xl text-base font-medium text-title'>
                                            Saturday and Sunday: Closed
                                        </span>

                                    </span>
                                </li>
                            </ul>
                        </AnimateOnScroll>
                    </div>
                    {/* RIGHT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <LocationForm />
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LocContent