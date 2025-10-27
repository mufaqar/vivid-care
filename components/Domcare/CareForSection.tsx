"use client"
import React, { useState } from 'react';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import AnimateOnScroll, { useAutoDelay } from '../animation';
import { CareFor } from '@/lib/queries/GetAbout';
import Image from 'next/image';


interface Props {
  data?: CareFor;
}

export default function CareForSection({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const getDelay = useAutoDelay();
  const toggleAccordion = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-footer py-16 px-6 text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Accordion */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">
            {data?.title}
          </h2>
          <p className="text-gray-300 mb-8 font-normal">
            {data?.description}
          </p>

          <div className="space-y-4">
            {data?.options.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className=" rounded-lg px-5 py-4 cursor-pointer transition"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-xl" />
                    <h4 className="text-2xl font-semibold font-playfair">{item.title}</h4>
                  </div>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </div>
                {activeIndex === index && item.description && (
                  <p className="text-md text-gray-300 mt-2 font-normal">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full">
          <Image
            src={data?.image?.node?.mediaItemUrl || "/images/CareForSection.png"} // Replace with your image path
            alt="Group care"
            className="rounded-xl w-full shadow-lg object-cover"
            width={1024}
            height={1024}
          />
        </div>
      </div>

    </section>
  );
}
