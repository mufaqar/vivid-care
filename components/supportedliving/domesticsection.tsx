import React from "react";
import Image from "next/image";
import AnimateOnScroll from "../animation";
import { AboutSupported } from "@/lib/queries/GetSupported";

interface Props {
  data?: AboutSupported;
}

export default function Domesticsection({ data }: Props) {
  const bgColors = ["bg-[#DCFCE7]", "bg-[#F3E8FF]", "bg-[#FFEDD5]"];
  const iconBg = ["bg-[#16A34A]", "bg-[#9333EA]", "bg-[#EA580C]"];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Title + Description */}
      <AnimateOnScroll type="fade-up">
        <div className="max-w-5xl mx-auto text-center mb-16">
          {data?.title && (
            <h2 className="text-4xl md:text-6xl font-bold font-playfair">
              {data.title}{" "}
              <span className="text-[#F28AA9]">{data?.subTitle}</span>
            </h2>
          )}
          {data?.description && (
            <p className="mt-8 text-gray-700 max-w-2xl mx-auto text-xl font-normal">
              {data.description}
              <a href="#" className="text-sky-500 underline ml-2">
                Read More...
              </a>
            </p>
          )}
        </div>
      </AnimateOnScroll>

      {/* Option Cards */}
      <AnimateOnScroll type="fade-up">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          {data?.options?.length ? (
            data.options.map((service, index) => {
              const bgColor = bgColors[index % bgColors.length];
              const iconBgColor = iconBg[index % iconBg.length];

              return (
                <div
                  key={index}
                  className={`${bgColor} rounded-lg p-6 shadow-sm transition hover:shadow-md`}
                >
                  <div
                    className={`${iconBgColor} text-white w-12 h-12 flex items-center justify-center rounded-full mb-4`}
                  >
                    {service?.icon?.node?.mediaItemUrl &&
                      <Image
                        src={service.icon.node.mediaItemUrl}
                        alt={service.icon.node.altText || "Icon"}
                        width={40}
                        height={40}
                        className="object-contain"
                      />}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-playfair">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-md font-normal">
                    {service.description}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No options available.
            </p>
          )}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
