"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ModalStepper from "./modalStepper";
import Link from "next/link";

interface TabItem {
  title: string;
  slug: string;
  content: React.ReactNode;
}

interface TabsSliderProps {
  data: TabItem[];
  activeServiceTitle: string;
}

const TabsSlider = ({ data, activeServiceTitle }: TabsSliderProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [open, setOpen] = useState(false);

  // ✅ Automatically open the tab that matches activeServiceTitle
  useEffect(() => {
    const matchedIndex = data.findIndex(
      (tab) => tab.title.toLowerCase() === activeServiceTitle.toLowerCase()
    );
    if (matchedIndex !== -1) setActiveTab(matchedIndex);
  }, [activeServiceTitle, data]);

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
      <section className="md:py-20 py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Button */}
          <button
            onClick={() => setOpen(true)}
            className="bg-transparent hover:bg-secondary md:text-lg text-sm font-semibold font-poppins text-secondary hover:text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-secondary mx-auto md:mb-20 mb-10"
          >
            Find Carers <FaArrowRightLong />
          </button>

          {/* Slider Tabs */}
          <div className="tabs">
            <Slider {...settings}>
              {data.map((tab, index) => (
                <div key={index} className="pb-5 px-2 w-fit">
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-full border rounded-full py-4 text-xs md:text-base font-semibold transition-all duration-300 ${activeTab === index
                      ? "bg-primary text-white before:flex"
                      : "bg-white text-desc border-gray-300 hover:bg-primary before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 hover:text-white"
                      }`}
                  >
                    <Link href={`/services/${tab?.slug}`}>
                      {tab.title}
                    </Link>
                  </button>
                </div>
              ))}
            </Slider>
          </div>

          {/* Tab Content */}
          <div className="mt-10">
            <div className="text-lg leading-relaxed">
              {data[activeTab].content}
            </div>
          </div>
        </div>
      </section>
      <ModalStepper open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default TabsSlider;
