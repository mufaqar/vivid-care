'use client'
import { faqs } from '@/data/faqsData'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Faqs = () => {
    const [open, setOpen] = useState(false)

    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index) // close if same, else open new
    }

    return (
        <section className='md:py-20 py-16'>
            <div className='container mx-auto md:px-0 px-4'>
                <h2 className='md:text-[52px] md:leading-none text-4xl font-semibold text-black font-playfair tracking-[-0.6] flex justify-between'>
                    Frequently Asked Questions <FaChevronDown onClick={() => { setOpen(!open) }} className='text-primary cursor-pointer' />
                </h2>
            </div>
            <div className={`${open ? "block" : "hidden"} container mx-auto md:px-0 px-4 mt-10`}>
                {faqs.map((faq, idx) => (
                    <div key={idx} className=" py-4">
                        {/* Question row */}
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFaq(idx)}
                        >
                            <h3 className="text-xl font-semibold text-black">{faq.question}</h3>
                            <FaChevronDown
                                className={`text-primary transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                                    }`}
                            />
                        </div>

                        {/* Answer */}
                        {openIndex === idx && (
                            <p className="mt-2 text-black transition-all duration-300 ease-in-out">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faqs