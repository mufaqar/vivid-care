import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const ServiceAbout = () => {
    return (
        <section className="md:py-20 py-16">
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 '>
                <div className="md:w-1/2 w-full">
                    <h2 className='md:text-5xl text-3xl font-semibold text-title mb-6'>
                        Our Respite Care Services
                    </h2>
                    <p className="md:text-lg text-sm font-normal text-desc mb-5">
                        Respite care is very important to prevent caregiver burnout. We make sure our caregivers are up to the task whenever they meet with our clients by ensuring our respite care services are up and running to relieve them whenever they need it.
                    </p>
                    <p className="md:text-lg text-sm font-normal text-desc mb-5">We provide respite care services for all the various kinds of domiciliary care services we provide. Our goal is to ensure you experience no breaks in the care service you receive while providing your primary carer with the time off they deserve.
                    </p>
                    <p className="md:text-lg text-sm font-normal text-desc mb-10">We guarantee your temporary caregiver will provide the same level of care and support for you as your primary caregiver.
                    </p>
                    <h2 className='md:text-5xl text-3xl font-semibold text-title mb-6'>
                        Benefits Of Respite Care
                    </h2>
                    <p className="md:text-lg text-sm font-normal text-desc mb-5">
                        There are several benefits to respite care for both you and your caregiver.
                    </p>
                    <p className="md:text-lg text-sm font-normal text-desc mb-5">
                        For your caregiver, respite care holds various benefits.
                    </p>
                    <ul className='space-y-4'>
                        <li className='md:text-lg text-sm font-normal text-desc flex items-center gap-4'>
                            <FaCheckCircle className='text-primary' />
                            Necessary time off
                        </li>
                        <li className='md:text-lg text-sm font-normal text-desc flex items-center gap-4'>
                            <FaCheckCircle className='text-primary' />
                            Prevents burnout
                        </li>
                        <li className='md:text-lg text-sm font-normal text-desc flex items-center gap-4'>
                            <FaCheckCircle className='text-primary' />
                            Time to emotionally recharge
                        </li>
                        <li className='md:text-lg text-sm font-normal text-desc flex items-center gap-4'>
                            <FaCheckCircle className='text-primary' />
                            Enhanced long-term care
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/2 w-full">
                    <Image src="/images/benefits.png" alt='benefits' width={647} height={817} />
                </div>
            </div>
            <div className='container mx-auto md:px-0 px-4 md:mt-20 mt-10'>
                <div className='bg-[#D5F4FF] p-4 rounded-[10px]'>
                    <p className='md:text-lg text-sm font-normal text-desc '>
                        For the client, you get even more benefits. You still get all the benefits of having your care needs met by a professional caregiver. On top of that, you are assured your primary caregiver is getting the necessary time to rest and feel refreshed. This time off ensures that when they get back to you, they can deliver top-tier care services to meet your needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ServiceAbout