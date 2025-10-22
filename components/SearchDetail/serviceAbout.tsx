import { Service, ServiceInfo } from '@/lib/gql-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdPhoneInTalk } from 'react-icons/md'

interface Props {
    data?: Service | null,
    
}
const ServiceAbout = ({ data }: Props) => {
    return (
        <section className="md:py-20 py-16">
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 '>
                <div className="md:w-1/2 w-full">
                    <div className="service_Content"
                        dangerouslySetInnerHTML={{ __html: data?.serviceInfo?.serviceAbout?.serviceDetail || "" }} />
                    <h2 className='md:text-5xl text-3xl font-semibold text-title mb-6'>
                        {/* Our Respite Care Services */}
                        {/* {about?.serviceAbout?.serviceDetail} */}
                    </h2>
                    {/* <p className="md:text-lg text-sm font-normal text-desc mb-5">
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
                    </ul> */}
                </div>
                <div className="md:w-1/2 w-full bg-gradient-to-b from-[#DFF7FF] bg-[#9FE8FF] px-10 pt-10 rounded-[20px]">
                    <h2 className='md:text-5xl text-3xl font-semibold text-title mb-8'>
                        Need Help?
                    </h2>
                    <ul className='space-y-8 mb-10'>
                        <li className='flex md:flex-row flex-col gap-5 items-center'>
                            <span className='md:text-3xl text-xl flex md:w-[64px] md:h-[64px] w-[32px] h-[32px] justify-center items-center text-title bg-white rounded-full'>
                                <MdPhoneInTalk />
                            </span>
                            <span className='flex flex-col'>
                                <span className='text-base font-normal text-title'>Call Us Now:</span>
                                <Link href="tel:03333399946" className='md:text-xl text-base font-medium text-title'>
                                    0333 339 9946
                                </Link>
                            </span>
                        </li>
                        <li className='flex md:flex-row flex-col gap-5 items-center'>
                            <span className='md:text-3xl text-xl flex md:w-[64px] md:h-[64px] w-[32px] h-[32px] justify-center items-center text-title bg-white rounded-full'>
                                <FaEnvelope />
                            </span>
                            <span className='flex flex-col'>
                                <Link href="mailto:info@vividcareservices.co.uk" target='_blank' className='md:text-xl text-base font-medium text-title'>
                                    info@vividcareservices.co.uk
                                </Link>
                                <Link href="mailto:recruitment@vividcareservices.co.uk" target='_blank' className='md:text-xl text-base font-medium text-title'>
                                    recruitment@vividcareservices.co.uk
                                </Link>
                            </span>
                        </li>
                    </ul>
                    <Link href="#" className='bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-fit'>
                        Request a Call Back <FaArrowRightLong />
                    </Link>
                    <Image src="/images/help.png" alt='help' width={500} height={478} className='ml-auto mr-0 mt-[-60px]' />
                </div>
            </div>
            <div className='container mx-auto md:px-0 px-4 md:mt-20 mt-10'>
                <div className='bg-[#D5F4FF] p-4 rounded-[10px]'>
                    <div className="md:text-lg text-sm font-normal text-desc "
                        dangerouslySetInnerHTML={{ __html: data?.excerpt || "" }} />
                    {/* <p className=''>
                        For the client, you get even more benefits. You still get all the benefits of having your care needs met by a professional caregiver. On top of that, you are assured your primary caregiver is getting the necessary time to rest and feel refreshed. This time off ensures that when they get back to you, they can deliver top-tier care services to meet your needs.
                    </p> */}
                </div>
            </div>
        </section>
    )
}

export default ServiceAbout