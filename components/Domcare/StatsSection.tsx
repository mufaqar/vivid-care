import React from 'react';
import AnimateOnScroll from '../animation';

export default function StatsSection() {
  const stats = [
    {
      value: '500+',
      label: 'Individuals Supported',
    },
    {
      value: '15',
      label: 'Years of Experience',
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <section className="bg-[#FFF3F7] py-16 px-6">
      <AnimateOnScroll type="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-[800] text-[#151A4D] font-playfair">
          Making a Difference Every Day
        </h2>
        <p className="text-black mt-3 mb-12 text-xl md:text-base font-poppins">
          Our impact in the community speaks for itself
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-[800] text-[#0A1440] font-poppins">{stat.value}</div>
              <div className="mt-2 text-[#464646] text-md font-poppins ">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
