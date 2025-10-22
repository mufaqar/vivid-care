"use client";
import React from 'react'
import ServiceBox from '../Services/serviceBox'
import AnimateOnScroll, { useAutoDelay } from '../animation'
import { HomeInfo, Service, ServiceSection } from '@/lib/gql-types';

interface ServiceProps{
    data: Service[],
    content?: ServiceSection,
}
const ServicesSection = ({data,content}: ServiceProps) => {
    const getDelay = useAutoDelay();
    return (
        <section className="pt-16 pb-4">
            <div className="container mx-auto md:px-0 px-4">
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <h2 className="md:text-[62px] md:leading-none text-4xl text-black font-semibold tracking-[-0.6] font-playfair text-center mb-8 max-w-[952px] mx-auto">
                       {content?.title}
                    </h2>
                </AnimateOnScroll>
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <div className="md:text-xl text-lg font-normal text-black font-poppins text-center capitalize max-w-[830px] mx-auto mb-16"
                    dangerouslySetInnerHTML={{__html: content?.content || ''}} />
                        
                </AnimateOnScroll>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    {data.slice(0,6).map((item, idx) => (
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