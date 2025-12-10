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

const LocContent = ({ reviews }: any) => {
    const getDelay = useAutoDelay();

    return (
        <>
            <Banner />
            <section className="md:py-20 py-16">
                <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 items-center justify-between">
                    {/* LEFT SECTION */}
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
                    {/* RIGHT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h2 className='md:text-[32px] md:leading-none text-2xl font-medium text-title mb-5'>
                                Welcome to Vivid Care Services
                            </h2>
                            <h2 className="md:text-5xl text-3xl font-semibold text-title mb-5">
                                Why Choose Our Domiciliary Home Care?
                            </h2>
                            <p className="text-lg font-normal text-desc mb-6">
                                Vivid Care offers high-quality home care and support to aging people, patients recovering from surgery, those with severe medical conditions or terminal illnesses, and people with disabilities, at the convenience of their own home. Our domiciliary care services in Manchester offer a wide range of care plans from short-term care to 24/7 live-in care.
                            </p>
                            <p className="text-lg font-normal text-desc mb-6">
                                Our reliable caregivers deliver professional yet compassionate home care to every client, in close partnership with their doctors and families. Our goal is to enhance the quality of life of our client and help them maintain their independence.
                            </p>
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
                                Our In-Home Care Services
                            </h2>
                            <p className='text-lg font-normal text-desc text-center mb-6'>
                                We offer a wide range of home care services for every client and circumstance and we are flexible to accomodate the specialised needs of our clients. Our skilled caregivers prioritise compassion while delivering professional-level home care every time.
                            </p>
                        </AnimateOnScroll>
                    </div>
                    <ServiceSection />
                </div>
            </section>
            <Testimonials data={reviews} />
            <section className="md:py-20 py-16">
                <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 items-center justify-between">
                    {/* LEFT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h2 className="md:text-5xl text-3xl font-semibold text-title mb-5">
                                Quality Domiciliary Care in Manchester
                            </h2>
                            <p className="text-lg font-normal text-desc mb-6">
                                Since 2005, we at Vivid Care have offered the special Vivid Care experience based on our values of Compassion, Professionalism, Innovation, Empathy, Respect, Reliability, Competence, and Honesty.
                            </p>
                            <p className="text-lg font-normal text-desc mb-6">
                                The caregivers at Vivid Care are committed to providing high-quality in-home support services that both comply with approved care plans and guidelines. Our caregivers are handpicked from a large pool of candidates and go through a stringent vetting process to make sure they are of the finest quality.
                            </p>
                            <p className="text-lg font-normal text-desc mb-6">
                                We care deeply about our clients and consistently strive to exceed their expectations. We personalise our services to make them feel special, at ease, and comfortable.
                            </p>
                        </AnimateOnScroll>
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
                                <Link href="/contact-us" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-secondary hover:border-primary'>
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
                                src="/images/support.png"
                                alt="support"
                                width={655}
                                height={608}
                                className="w-full h-auto object-cover"
                            />
                        </AnimateOnScroll>
                    </div>
                    {/* RIGHT SECTION */}
                    <div className="md:w-1/2 w-full">
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h2 className="md:text-5xl text-3xl font-semibold text-title mb-5">
                                Benefits of home care
                            </h2>
                            <ul className='space-y-5 mb-6'>
                                <li className='text-lg font-semibold text-title flex gap-2 items-center'>
                                    <FaCheckCircle className="text-primary" />
                                    Individually personalised care
                                </li>
                                <li className='text-lg font-semibold text-title flex gap-2 items-center'>
                                    <FaCheckCircle className="text-primary" />
                                    Relationship-based care
                                </li>
                                <li className='text-lg font-semibold text-title flex gap-2 items-center'>
                                    <FaCheckCircle className="text-primary" />
                                    Maintenance of daily routine
                                </li>
                                <li className='text-lg font-semibold text-title flex gap-2 items-center'>
                                    <FaCheckCircle className="text-primary" />
                                    Meal preparation and housework
                                </li>
                                <li className='text-lg font-semibold text-title flex gap-2 items-center'>
                                    <FaCheckCircle className="text-primary" />
                                    Expert assistance and advice 24/7
                                </li>
                                <li className='text-lg font-semibold text-title flex gap-2 items-center'>
                                    <FaCheckCircle className="text-primary" />
                                    Help in engaging in favourite activities
                                </li>
                                <li className='text-lg font-semibold text-title flex gap-2 items-center'>
                                    <FaCheckCircle className="text-primary" />
                                    Health management
                                </li>
                                <li className='text-lg font-semibold text-title flex gap-2 items-center'>
                                    <FaCheckCircle className="text-primary" />
                                    Flexible care plans
                                </li>
                            </ul>
                            <p className="text-lg font-normal text-desc mb-6">
                                Let us provide you with the care you need. Discover our expert services today.
                            </p>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            <section className="md:py-20 py-16">
                <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 items-center justify-between">
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
                                    <span className='flex flex-col'>
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
                                    <span className='flex flex-col'>
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
                                    <span className='flex flex-col'>
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