import React from 'react';
import { FaUsers } from 'react-icons/fa';
import AnimateOnScroll from '../animation';
import Link from 'next/link';
import Image from 'next/image';

const cards = [
    {
        title: 'Empowering Independence',
        subtitle: 'Treating Individuals With Respect',
        image: '/images/Empowering independence.png',
        hasButton: true,
    },
    {
        title: 'Meaningful Activities',
        subtitle: 'Enriching Their Daily Lives',
        image: '/images/Meaningful.png',
        hasButton: false,
    },
    {
        title: 'Compassionate Team',
        subtitle: 'Providing Exceptional Care',
        image: '/images/Compassionate.png',
        hasButton: false,
    },
];

export default function EmpowermentGrid() {
    return (
        <section className="bg-[#FAFAFD] py-16 px-4">
            <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
                {/* Left Card (big) */}
                <AnimateOnScroll type="fade-up">
                    <div className="relative h-[400px] md:h-[630px] rounded-xl overflow-hidden group transition-all ease-in-out duration-300">
                        <Image
                            src={cards[0].image}
                            alt={cards[0].title}
                            width={600}
                            height={684}
                            className="object-cover w-full h-full"
                        />

                        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col items-start justify-end text-white text-center">
                            <div className="flex items-center gap-3 mb-3 flex-wrap justify-center translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                                <FaUsers className="text-white text-2xl" />
                                <h3 className="text-2xl md:text-4xl font-semibold font-playfair">{cards[0].title}</h3>
                            </div>
                            <p className="text-lg md:text-xl translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out">{cards[0].subtitle}</p>

                            {cards[0].hasButton && (
                                <Link href="/search-detail"
                                    className="
                                            mt-6 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-6 py-2 rounded 
                                            opacity-0 translate-y-3 
                                            group-hover:opacity-100 group-hover:translate-y-0 
                                            transition-all duration-500 ease-in-out
                                            "
                                >
                                    Enquire Now →
                                </Link>
                            )}
                        </div>
                    </div>

                </AnimateOnScroll>
                {/* Right 2 Cards */}
                <div className="grid grid-cols-1 gap-6 ">

                    {cards.slice(1).map((card, index) => (
                        <AnimateOnScroll type="fade-up" key={index}>
                            <div  className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden group">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end text-white text-left">
                                    <div className="flex items-center gap-2 mb-2 translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                                        <FaUsers className="text-white text-lg" />
                                        <h3 className="text-xl md:text-3xl font-semibold font-playfair">{card.title}</h3>
                                    </div>
                                    <p className="text-sm md:text-base translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out">{card.subtitle}</p>
                                    <Link href="/search-detail" className="mt-6 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-6 py-2 rounded w-fit opacity-0 translate-y-3 
                                                group-hover:opacity-100 group-hover:translate-y-0 
                                                transition-all duration-500 ease-in-out">
                                        Enquire Now →
                                    </Link>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}

                </div>
            </div>
        </section>
    );
}
