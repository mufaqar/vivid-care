'use client'
import { faqs } from '@/data/faqsData'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import AnimateOnScroll, { useAutoDelay } from '../animation'

const Faqs = () => {
    const [open, setOpen] = useState(false)

    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index) // close if same, else open new
    }
    const getDelay = useAutoDelay();

    return (
        <section className='md:py-20 py-16'>
            <div className='container mx-auto md:px-0 px-4'>
                <AnimateOnScroll type="fade-up" delay={getDelay()}>
                    <h2 className='md:text-[52px] md:leading-none text-4xl font-semibold text-black font-playfair tracking-[-0.6] flex justify-between items-center'>
                        Frequently Asked Questions <FaChevronDown onClick={() => { setOpen(!open) }} className={`${open ? "rotate-180" : ""
                            } text-primary text-xl cursor-pointer transform transition-transform duration-300`} />
                    </h2>
                </AnimateOnScroll>
            </div>
            <div className={`${open ? "block" : "hidden"} container mx-auto md:px-0 px-4 mt-10 space-y-[20px]`}>
                {faqs.map((faq, idx) => (
                    <AnimateOnScroll key={idx} type="fade-up" delay={getDelay()}>
                        <div className="py-4 max-w-[1024px] mx-auto">
                            {/* Question row */}
                            <div
                                className="flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out"
                                onClick={() => toggleFaq(idx)}
                            >
                                <h3 className="text-xl font-poppins font-semibold mb-4 text-black">{faq.question}</h3>
                                <FaChevronDown
                                    className={`text-primary transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                            {/* Answer */}
                            {openIndex === idx && (
                                <p className="mt-2 font-poppins text-black transition-all duration-300 ease-in-out">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </section>
    )
}

export default Faqs