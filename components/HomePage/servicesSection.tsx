"use client";
import { services } from '@/data/servicesData'
import React from 'react'
import ServiceBox from '../Services/serviceBox'
import AnimateOnScroll, { useAutoDelay } from '../animation'

const ServicesSection = () => {
    const getDelay = useAutoDelay();
    return (
        <section className="pt-16 pb-4">
            <div className="container mx-auto md:px-0 px-4">
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <h2 className="md:text-[62px] md:leading-none text-4xl text-black font-semibold tracking-[-0.6] font-playfair text-center mb-8 max-w-[952px] mx-auto">
                        Our Comfortable and Accessible Supported Living Homes
                    </h2>
                </AnimateOnScroll>
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <p className="md:text-xl text-lg font-normal text-black font-poppins text-center capitalize max-w-[830px] mx-auto mb-16">
                        At Vivid Care Services, we offer a variety of supported living homes, each designed to provide comfort, accessibility, and a sense of community.
                    </p>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-1">
                    {services.map((item, idx) => (
                        <AnimateOnScroll key={idx} type="fade-up" delay={getDelay()}>
                            <ServiceBox data={item} />
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection