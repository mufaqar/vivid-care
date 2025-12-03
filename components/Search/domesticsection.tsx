import React from 'react'
import { FaHome, FaUser, FaUsers } from 'react-icons/fa'
import AnimateOnScroll from '../animation';

function Domesticsection() {
  const careServices = [
    {
      title: "Housing Support",
      description:
        "Assistance with finding and maintaining suitable housing, including help with rent, utilities, and home maintenance.",
      bgColor: "bg-[#DCFCE7]",
      iconBg: "bg-[#16A34A]",
      iconColor: "text-white",
      icon: FaHome,
    },
    {
      title: "Personal Care",
      description:
        "Professional support with daily living activities, medication management, and personal hygiene assistance.",
      bgColor: "bg-[#F3E8FF]",
      iconBg: "bg-[#9333EA]",
      iconColor: "text-white",
      icon: FaUser,
    },
    {
      title: "Community Integration",
      description:
        "Support with social activities, community engagement, and building meaningful relationships within the neighborhood.",
      bgColor: "bg-[#FFEDD5]",
      iconBg: "bg-[#EA580C]",
      iconColor: "text-white",
      icon: FaUsers,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <AnimateOnScroll type="fade-up">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair">
            What Is <span className="text-[#F28AA9]">Supported Living?</span>
          </h2>
          <p className="mt-8 text-title max-w-2xl mx-auto text-xl font-normal">
            At Vivid Care Services, we offer a variety of supported living homes,
            each designed to provide comfort, accessibility, and a sense of{' '}
            <a href="#" className="text-sky-500 underline">
              Read More...
            </a>
          </p>
        </div>
      </AnimateOnScroll>
       <AnimateOnScroll type="fade-up">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 ">
        {careServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            
            <div
              key={index}
              className={`${service.bgColor} rounded-lg p-6 shadow-sm transition hover:shadow-md`}
            >
              
              <div
                className={`${service.iconBg} ${service.iconColor} w-10 h-10 flex items-center justify-center rounded-full mb-4`}
              >
                <IconComponent className="w-6 h-6" />
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
