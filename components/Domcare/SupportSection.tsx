import React from 'react';
import { FaPlay } from 'react-icons/fa';
import AnimateOnScroll from '../animation';
import { CTA as SupportedCTA } from "@/lib/queries/GetSupported";
import { CTA as AboutCTA } from "@/lib/queries/GetAbout";
import Link from 'next/link';
import Image from 'next/image';


    

interface Props {
  data?: SupportedCTA | AboutCTA; // ✅ accept either
}


export default function SupportSection({ data }: Props) {
    return (
        <section className="bg-[#F9FAFB] py-12 px-4">
            <AnimateOnScroll type="fade-up">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-[#DBEAFE] rounded-2xl p-8 md:p-12 shadow">
                    {/* Text Content */}

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#1F2937] max-w-[396px] mb-4">
                            {/* Empowering <br />independence through compassionate support */}
                            {data?.title}
                        </h2>
                        <p className="text-[#374151] mb-6 text-base md:text-lg">
                            {data?.description}
                        </p>
                        <Link href={`${data?.link}`} className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-md text-sm md:text-base transition">
                            Enquire Now
                        </Link>
                    </div>

                    {/* Video Card */}

                    <div className="flex-1 w-full max-w-md">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src={data?.image?.node?.mediaItemUrl || "/images/CareForSection.png"} // Replace with your image
                                alt="Support Video"
                                width={300}
                                height={300}
                                className="w-full h-72 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
                                <div className="bg-white bg-opacity-80 rounded-full p-3 hover:bg-opacity-100 transition">
                                    <FaPlay className="text-sky-500 text-xl cursor-pointer" />
                                </div>
                                <p className="mt-2 text-sm font-medium">Watch our story · 02:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
}
