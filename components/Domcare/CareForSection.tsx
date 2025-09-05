"use client"
import React, { useState } from 'react';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import AnimateOnScroll from '../animation';

const careNeeds = [
  {
    title: 'Down Syndrome',
    description: 'Fostering growth and community for fulfilling lives.',
  },
  { title: 'Physical Disabilities' },
  { title: 'Learning Differences' },
  { title: 'Visual Impairments' },
  { title: 'Hearing Impairments' },
  { title: 'Mental Health' },
  { title: 'Cerebral Palsy (CP)' },
  { title: 'ADHD' },
];

export default function CareForSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index:any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#151A4D] py-16 px-6 text-white">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Accordion */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">
            Who is <span className="text-white">Domestic Care</span> for?
          </h2>
          <p className="text-gray-300 mb-8 font-normal">
            At Vivid Care Services, we offer a variety of supported living homes, each designed to provide comfort, accessibility, and a sense of community.
          </p>

          <div className="space-y-4">
            {careNeeds.map((item, index) => (
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
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
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
          <img
            src="/images/CareForSection.png" // Replace with your image path
            alt="Group care"
            className="rounded-xl w-full shadow-lg object-cover"
          />
        </div>
      </div>
     
    </section>
  );
}
