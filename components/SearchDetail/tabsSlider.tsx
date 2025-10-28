"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ModalStepper from "./modalStepper";
import Link from "next/link";
import { Service } from "@/lib/gql-types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AnimateOnScroll, { useAutoDelay } from "../animation";

interface TabsSliderProps {
  data: Service[]; // all services
  activeService: Service; // currently active service
}

const TabsSlider = ({ data, activeService }: TabsSliderProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get current path
  const [activeSlug, setActiveSlug] = useState<string>("");
  const getDelay = useAutoDelay();
  // ✅ Detect active slug from URL
  useEffect(() => {
    if (pathname) {
      const slugFromPath = pathname.split("/").pop();
      setActiveSlug(slugFromPath || activeService?.slug);
    }
  }, [pathname, activeService]);

  // ✅ Move slider to current service when activeSlug changes
  useEffect(() => {
    if (!sliderRef.current || !activeSlug || data.length === 0) return;

    const activeIndex = data.findIndex(
      (service) => service.slug === activeSlug
    );

    if (activeIndex !== -1) {
      sliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeSlug, data]);

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
          <AnimateOnScroll type="fade-up" delay={getDelay()}>
            <Link
              href="https://vivid-care-jobs.vercel.app/?open=lead"
              className="bg-transparent hover:bg-secondary md:text-lg text-sm font-semibold font-poppins text-secondary hover:text-white md:py-4 py-2 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit border-2 border-secondary mx-auto md:mb-20 mb-10"
            >
              Find Carers <FaArrowRightLong />
            </Link>
          </AnimateOnScroll>
          {/* ✅ Slider (HTML unchanged, logic simplified) */}
          <AnimateOnScroll type="fade-up" delay={getDelay()}>
            <div className="tabs">
              <Slider ref={sliderRef} {...settings}>
                {data.map((tab, index) => (
                  <div key={index} className="pb-5 px-2 w-full">
                    <Link
                      className={`btn w-full border rounded-full before:opacity-0 before:hover:opacity-100 py-4 text-xs md:text-base font-semibold transition-all duration-300 ${tab.slug === activeSlug
                        ? "bg-primary text-white border-primary before:opacity-100"
                        : "bg-white text-desc border-gray-300 hover:bg-primary hover:text-white "
                        }`}

                      href={`/services/${tab?.slug}`}>{tab.title}</Link>
                  </div>
                ))}
              </Slider>
            </div>
          </AnimateOnScroll>
          <div className="mt-10 space-y-10">
            <AnimateOnScroll type="fade-up" delay={getDelay()}>
              <div
                className="service_Content"
                dangerouslySetInnerHTML={{ __html: activeService.content || "" }} />
            </AnimateOnScroll>
            <AnimateOnScroll type="fade-up" delay={getDelay()}>
              {activeService.featuredImage?.node?.mediaItemUrl && (
                <Image
                  width={1320}
                  height={702}
                  src={activeService.featuredImage.node.mediaItemUrl}
                  alt={activeService.featuredImage.node.altText || activeService.title}
                  className="rounded-lg w-full h-[400px] object-cover"
                />
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Modal */}
        <ModalStepper open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default TabsSlider;
