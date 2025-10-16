"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import ModalStepper from "./modalStepper";

interface TabItem {
  id: number;
  title: string;
  content: React.ReactNode;
}

const TabsSlider = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [open, setOpen] = useState(true);

  const tabs: TabItem[] = [
    {
      id: 0,
      title: "SUPPORTED LIVING",
      content: (
        <div className="space-y-6">
          <p className="md:text-lg text-sm font-normal text-desc">
            Whether client or caregiver, we care about your well-being at Vivid Care Services. We provide efficient respite care to give your primary caregiver time to rest and recuperate. Our professional substitute caregivers take over your care needs while your primary caregiver is out of commission temporarily or just needs a break. This ensures you are provided the best possible care and support at every point.
          </p>
          <p className="md:text-lg text-sm font-normal text-desc">Our expert caregivers maintain the same level of care and professionalism whether they are your main caregiver or a respite carer. We ensure you have stability and only match you to caregivers who are perfect for your needs and preferences. Including your respite carer.
          </p>
          <p className="md:text-lg text-sm font-normal text-desc">Our respite care services give your primary caregiver a chance to take some time off and prevent burnout. Creating time for rest is important to deliver the best care and support to our clients.
          </p>
          <p className="md:text-lg text-sm font-normal text-desc">At Vivid Care, we make sure the transition is seamless and friction-free. Your respite carer is caught up on all your health, social, emotional, and psychological needs before they even meet you. You don’t need to re-educate them on your specific and unique needs all over.
          </p>
          <p className="md:text-lg text-sm font-normal text-desc">Our respite care services are flexible to cover a few hours to however long your primary caregiver needs. Where there is a need for emergency respite, we make sure you are not left stranded and are provided with the support you need.
          </p>
          <Image src="/images/tab1.png" alt="tab1" width={1320} height={702} />
        </div>
      ),
    },
    {
      id: 1,
      title: "RESPITE CARE",
      content: (
        <p className="md:text-lg text-sm font-normal text-desc">
          Respite care provides temporary relief for primary caregivers, ensuring continuous, compassionate support.
        </p>
      ),
    },
    {
      id: 2,
      title: "CHILD CARE",
      content: (
        <p className="md:text-lg text-sm font-normal text-desc">
          Child care services nurture children in a safe, engaging environment that supports learning and development.
        </p>
      ),
    },
    {
      id: 3,
      title: "PHYSICAL DISABILITIES CARE",
      content: (
        <p className="md:text-lg text-sm font-normal text-desc">
          Physical disabilities care promotes independence and dignity through specialized support and accessibility.
        </p>
      ),
    },
    {
      id: 4,
      title: "LONG TERM CARE",
      content: (
        <p className="md:text-lg text-sm font-normal text-desc">
          Long-term care ensures consistent assistance for those with ongoing health or mobility needs.
        </p>
      ),
    },
    {
      id: 5,
      title: "LONG TERM CARE",
      content: (
        <p className="md:text-lg text-sm font-normal text-desc">
          Long-term care ensures consistent assistance for those with ongoing health or mobility needs.
        </p>
      ),
    },
    {
      id: 6,
      title: "LONG TERM CARE",
      content: (
        <p className="md:text-lg text-sm font-normal text-desc">
          Long-term care ensures consistent assistance for those with ongoing health or mobility needs.
        </p>
      ),
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <span className="text-desc text-lg absolute md:-right-5 right-0 top-[10%] -translate-y-1/2 z-10 cursor-pointer flex justify-center items-center md:w-[48px] w-[44px] md:h-[48px] h-[44px] border border-primary/10 bg-white shadow-md rounded-full">
          <FaArrowRightLong />
        </span>
      </div>
    ),
    prevArrow: (
      <div>
        <span className="text-desc text-lg absolute md:-left-5 left-0 top-[10%] -translate-y-1/2 z-10 cursor-pointer flex justify-center items-center md:w-[48px] w-[44px] md:h-[48px] h-[44px] border border-primary/10 bg-white shadow-md rounded-full">
          <FaArrowLeftLong />
        </span>
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <>
      <section className="md:py-20 py-16 bg-white ">
        <div className="container mx-auto px-4">
          <button onClick={() => setOpen(true)} className='bg-transparent hover:bg-secondary md:text-lg text-sm font-semibold font-poppins text-secondary hover:text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-secondary mx-auto md:mb-20 mb-10'>
            Find Carers  <FaArrowRightLong />
          </button>
          {/* Slider Tabs */}
          <div className="tabs">
            <Slider {...settings}>
              {tabs.map((tab) => (
                <div key={tab.id} className="pb-5 px-2 w-fit">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full border rounded-full py-4 text-xs md:text-base font-semibold transition-all duration-300  ${activeTab === tab.id
                      ? "bg-primary text-white before:flex"
                      : "bg-white text-desc border-gray-300 hover:bg-primary before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 hover:text-white"
                      }`}
                  >
                    {tab.title}
                  </button>
                </div>
              ))}
            </Slider>
          </div>

          {/* Tab Content */}
          <div className="mt-10">
            <h2 className="md:text-5xl text-3xl font-semibold text-title mb-4">
              We Offer Efficient {tabs[activeTab].title} Services
            </h2>
            <div className="text-lg leading-relaxed">{tabs[activeTab].content}</div>
          </div>
        </div>
      </section>
      <ModalStepper open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default TabsSlider;
