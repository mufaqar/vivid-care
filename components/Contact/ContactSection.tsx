"use client";
import AnimateOnScroll, { useAutoDelay } from '@/components/animation'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


const ContactSection = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {
            setSuccess("Your message has been sent!");
            setForm({ name: "", email: "", phone: "", message: "" });
        } else {
            setSuccess("Something went wrong.");
        }
    };
    const getDelay = useAutoDelay();
    return (
        <main>
            <section className="min-h-[60vh] bg-gradient-to-r from-[#EAF4FC] to-[#FDEAF3] flex items-center justify-center px-4 pt-20">
                <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col gap-6 items-center ">
                    <div className='md:w-1/2 w-full'>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <h1 className="text-4xl md:text-6xl font-bold text-title mb-6 font-poppins">
                                Contact Us
                            </h1>
                        </AnimateOnScroll>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <AnimateOnScroll type="fade-up" delay={getDelay()}>
                            <div className="relative border-7 border-white rounded-xl">
                                <Image
                                    src={"/images/domcare-main.png"}
                                    alt={"Elderly care"}
                                    width={400}
                                    height={400}
                                    className="rounded-xl shadow-lg h-96 w-full object-cover "
                                />

                                {/* Overlay button */}
                                <button className="absolute inset-0 rounded-xl bg-black/50 flex flex-col items-center justify-center text-white">
                                    <div className="bg-white bg-opacity-80 hover:bg-opacity-100 transition rounded-full p-3 cursor-pointer">
                                        <svg
                                            className="w-10 h-10 text-blue-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M6 4l10 6-10 6V4z" />
                                        </svg>
                                    </div>
                                    <p className="mt-2 text-md  font-semibold font-poppins">Watch our story ·<br /> 2:30</p>
                                </button>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-16 gap-6 items-center'>
                    <div className="md:w-2/3 w-full bg-[#EAF4FC] py-16 px-10">
                        <h2 className='md:text-[38px] md:leading-none text-2xl font-semibold font-playfair text-title mb-5'>
                            Request a Callback or Get In Touch
                        </h2>
                        <p className='text-lg font-normal text-desc mb-5'>
                            Thank you for your interest in Vivid Care and our services. Please fill out the form below and we will get back to you promptly regarding your request.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Name *"
                                    className="border border-black/30 rounded-md p-3 w-full outline-none"
                                />
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email *"
                                    className="border border-black/30 rounded-md p-3 w-full outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone *"
                                className="border border-black/30 rounded-md p-3 w-full outline-none"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message *"
                                rows={5}
                                className="border border-black/30 rounded-md p-3 w-full outline-none"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-16 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit relative z-10"
                            >
                                {loading ? "Sending..." : "SUBMIT"}
                            </button>

                            {success && <p className="text-sm mt-2 text-green-600">{success}</p>}
                        </form>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <h3 className='md:text-[28px] md:leading-none text-xl font-semibold font-playfair text-title mb-5'>
                            Phone & Email
                        </h3>
                        <ul className='space-y-4 mb-10'>
                            <li>
                                <Link href="tel:03333399946" className='md:text-xl text-base font-medium text-title hover:text-primary'>
                                    T: 0333 339 9946
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:info@vividcareservices.co.uk" target='_blank' className='md:text-xl text-base font-medium text-title hover:text-primary'>
                                    E: info@vividcareservices.co.uk
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:recruitment@vividcareservices.co.uk" target='_blank' className='md:text-xl text-base font-medium text-title hover:text-primary'>
                                    E: recruitment@vividcareservices.co.uk
                                </Link>
                            </li>
                        </ul>
                        <h3 className='md:text-[28px] md:leading-none text-xl font-semibold font-playfair text-title mb-5'>
                            Head Office
                        </h3>
                        <p className='md:text-xl text-base font-medium text-title mb-10'>
                            4th floor, Centenary House,
                            1 Centenary Way,
                            Manchester, M50 1RF.
                        </p>
                        <h3 className='md:text-[28px] md:leading-none text-xl font-semibold font-playfair text-title mb-5'>
                            Opening Hours
                        </h3>
                        <ul className='space-y-4'>
                            <li className='md:text-xl text-base font-medium text-title'>
                                Mon-Fri: 9:00am – 5:00pm
                            </li>
                            <li className='md:text-xl text-base font-medium text-title'>
                                Saturday: Closed
                            </li>
                            <li className='md:text-xl text-base font-medium text-title'>
                                Sunday: Closed
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactSection