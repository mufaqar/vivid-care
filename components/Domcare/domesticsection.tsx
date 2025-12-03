"use client";

import React from 'react'
import AnimateOnScroll, { useAutoDelay } from '../animation';
import { AboutDomcare } from '@/lib/queries/GetAbout';
import Image from 'next/image';
import Link from 'next/link';


interface Props {
  data?: AboutDomcare;
}

function Domesticsection({ data }: Props) {
 const getDelay = useAutoDelay();
  const bgColors = [
    "bg-[#DCFCE7]",
    "bg-[#F3E8FF]",
    "bg-[#FFEDD5]",
  ]
  const iconBg = [
    "bg-[#16A34A]",
    "bg-[#9333EA]",
    "bg-[#EA580C]",
  ]
  return (
    <section className="py-16 px-4 bg-white">
      <AnimateOnScroll type="fade-up" delay={getDelay()}>
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair">
            {data?.title} <span className="text-[#F28AA9]">{data?.subTitle}</span>
          </h2>
          <p className="mt-8 text-title max-w-2xl mx-auto text-xl font-normal">
            {data?.description}
            <Link href="#" className="text-sky-500 underline">
              Read More...
            </Link>
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll type="fade-up">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 ">
          {data?.options.map((service, index) => {
            return (

              <div
                key={index}
                className={`${bgColors[index % bgColors.length]} rounded-lg p-6 shadow-sm transition hover:shadow-md`}
              >

                <div
                  className={`${iconBg[index % iconBg.length]} text-white w-10 h-10 flex items-center justify-center rounded-full mb-4`}
                >
                  <Image src={service?.icon?.node?.mediaItemUrl || "/images/quality.png"} alt='icon' width={40} height={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-playfair">{service.title}</h3>
                <p className="text-gray-600 text-md font-normal">{service.description}</p>

              </div>
            );
          })}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default Domesticsection;
