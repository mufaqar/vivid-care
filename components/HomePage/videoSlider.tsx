"use client";

import Slider from "react-slick";
import React, { useRef, useState } from "react";
import SearchForm from "./searchForm";
import Image from "next/image";

interface Slide {
  video: string;
  title: string;
  description: string;
  button?: string;
}

const slides: Slide[] = [
  {
    video: "/videos/video1.mp4",
    title: "Supported Living Specialist",
    description:
      "Compassionate care tailored to your needs, in the comfort of your own home",
  },
  {
    video: "/videos/video1.mp4",
    title: "Supported Living Specialist",
    description:
      "Compassionate care tailored to your needs, in the comfort of your own home",
  },
  {
    video: "/videos/video1.mp4",
    title: "Supported Living Specialist",
    description:
      "Compassionate care tailored to your needs, in the comfort of your own home",
  },
];

export default function VideoSlider() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false, // 🔹 disable default dots
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    arrows: false,
    afterChange: (index: number) => setCurrent(index),
  };

  return (
    <div className="relative w-full h-screen">
      <Slider ref={sliderRef} {...settings} className="w-full h-screen">
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-screen rounded-b-[37.3px]">
            {/* Video Background */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-b-[37.3px]"
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/90 to-transparent z-10 rounded-b-[37.3px]" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 flex flex-col justify-center h-full">
              <div className="max-w-[706px] space-y-4">
                <h2 className="md:text-[86.41px] text-4xl leading-none font-bold text-white font-playfair mb-8 max-w-[660px]">
                  {slide.title}
                </h2>
                <p className="md:text-[21.05px] text-lg font-normal text-white mb-9 max-w-[540px]">
                  {slide.description}
                </p>
                <SearchForm />
              </div>

            </div>

          </div>
        ))}
      </Slider>

      {/* 🔹 Custom Clickable Index Dots */}
      <div className="absolute bottom-6 md:right-6 right-2 z-30 flex flex-col gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => sliderRef.current?.slickGoTo(idx)}
            className={`text-sm font-semibold transition relative flex items-end justify-center 
        before:content-[''] before:absolute before:top-[-20px] before:w-px before:h-[100%] before:left-1/2 before:bg-white/40 
        first:before:hidden 
        overflow-hidden
        ${current === idx
                ? "text-white h-[157px]"
                : "text-white/50 hover:text-white h-[50px]"
              }`}
          >
            0{idx + 1}
          </button>
        ))}
      </div>
      <div className="bg-secondary border-[10px] border-white md:w-[135px] md:h-[135px] w-[120px] h-[120px] rounded-full absolute -bottom-16 md:right-24 right-10 z-30 flex items-center justify-center">
        <Image src="/images/handicon.png" alt="handicon" width={83} height={93} />
      </div>
    </div>
  );
}
