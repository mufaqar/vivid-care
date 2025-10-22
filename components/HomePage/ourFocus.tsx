"use client";
import Image from 'next/image'
import React from 'react'
import AnimateOnScroll, { useAutoDelay } from '../animation'
import { WhyChoose } from '@/lib/gql-types';

interface Props {
    data?: WhyChoose;
}
const OurFocus = ({ data }: Props) => {
    const getDelay = useAutoDelay();
    return (
        <section className='md:py-20 py-16'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 justify-between'>
                <div className='md:w-fit w-full'>
                    <AnimateOnScroll type="fade-up" delay={getDelay()}>
                        <Image src={data?.image?.node?.mediaItemUrl || "/images/our-focus.png"} alt="our-focus" width={543} height={509} />
                    </AnimateOnScroll>
                </div>
                <div className='md:w-[55%] w-full grid md:grid-cols-2 grid-cols-1 gap-12'>
                    {data?.options?.map((item, idx) => (
                        <div key={idx}>
                            <AnimateOnScroll type="fade-up" delay={getDelay()}>
                                {item.icon?.node?.mediaItemUrl && (
                                    <Image
                                        src={item.icon.node.mediaItemUrl}
                                        alt={item.title || "icon"}
                                        width={62}
                                        height={62}
                                        className=""
                                    />
                                )}
                                <h3 className="md:text-[28px] md:leading-none text-2xl font-semibold text-black font-playfair tracking-[-0.6] mb-3.5 mt-5">
                                    {item.title}
                                </h3>
                                <p className="md:text-xl text-lg font-normal text-black font-poppins">
                                    {item.description}
                                </p>
                            </AnimateOnScroll>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurFocus