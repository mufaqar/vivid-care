import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight, FaClock, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import { RiContactsBook3Line } from 'react-icons/ri'
import CircleRotating from '../circleRotating'

const Footer = () => {
  return (
    <footer className='md:pt-[130px] pt-16 bg-footer'>
      <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-8 gap-5 justify-between'>
        <div className='bg-[#1E2461] py-7 px-5 rounded-lg md:w-[19%] w-full'>
          <Image src="/images/footer_logo.png" alt='footer_logo' width={134} height={43} />
          <p className='text-[15px] font-normal text-white font-poppins mt-6'>
            Vivid Care Services Ltd
          </p>
          <div className='px-2.5'>
            <p className='text-[15px] font-bold text-white font-poppins mt-5'>
              CQC overall rating
            </p>
            <p className='text-ld font-bold text-white font-poppins mt-5 flex items-center gap-2'>
              Good <span className='w-3 h-3 rounded-full bg-green-800 inline-block'></span>
            </p>
            <p className='text-[15px] font-light text-white font-poppins mt-5'>
              2 December 2024
            </p>
            <Link href="#" className='text-[15px] font-bold text-[#6C276A] font-poppins mt-5 flex items-center gap-2 bg-white pl-2.5 pr-6 py-2 rounded-sm w-fit'>
              See the report <FaChevronRight />
            </Link>
          </div>
        </div>
        <div className='flex gap-2.5 items-start md:w-[27%] w-full'>
          <div className='md:text-2xl text-lg flex md:min-w-[40px] md:h-[40px] min-w-[28px] h-[28px] justify-center items-center text-secondary border-2 border-secondary rounded-full group relative'>
            <CircleRotating bgColor="#151a4d" border="5px" />
            <RiContactsBook3Line className='relative z-10' />
          </div>
          <div>
            <h6 className='md:text-[26px] md:leading-none text-xl font-bold text-white font-playfair tracking-[-0.6] mb-3'>
              Contact Us Now
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href="tel:03333399946" className='text-sm font-medium text-white font-poppins hover:text-secondary'>
                  T: 0333 339 9946
                </Link>
              </li>
              <li>
                <Link href="mailto:info@vividcareservices.co.uk" target='_blank' className='text-sm font-medium text-white font-poppins hover:text-secondary'>
                  E: info@vividcareservices.co.uk
                </Link>
              </li>
              <li>
                <Link href="mailto:recruitment@vividcareservices.co.uk" target='_blank' className='text-sm font-medium text-white font-poppins hover:text-secondary text-nowrap'>
                  E: recruitment@vividcareservices.co.uk
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex gap-2.5 items-start md:w-[25%] w-full'>
          <div className='md:text-2xl text-lg flex md:min-w-[40px] md:h-[40px] min-w-[28px] h-[28px] justify-center items-center text-secondary border-2 border-secondary rounded-full group relative'>
            <CircleRotating bgColor="#151a4d" border="5px" />
            <FaMapMarkerAlt className='relative z-10' />
          </div>
          <div>
            <h6 className='md:text-[26px] md:leading-none text-xl font-bold text-white font-playfair tracking-[-0.6] mb-3'>
              Head Office Address
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <span className='text-sm font-medium text-white font-poppins'>
                  Warren Bruce Court 1st floor Warren Bruce Rd, Trafford Park, Stretford, Manchester M17 1LB
                </span>
              </li>
            </ul>
            <div className='mt-12'>
              <h6 className='md:text-xl md:leading-none text-lg font-bold text-white font-playfair tracking-[-0.6] mb-3 flex items-center gap-2'>
                Warrington Address <FiExternalLink className='text-secondary' />
              </h6>
              <ul className='flex flex-col gap-2'>
                <li>
                  <span className='text-sm font-medium text-white font-poppins'>
                    The Heath Business Park Heath Rd S, Weston, Runcorn WA7 4QX
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-12'>
              <h6 className='md:text-xl md:leading-none text-lg font-bold text-white font-playfair tracking-[-0.6] mb-3'>
                Warwickshire Address
              </h6>
              <ul className='flex flex-col gap-2'>
                <li>
                  <span className='text-sm font-medium text-white font-poppins'>
                    Forward house 17 High Street, Henley-In-Arden B95 5AA,
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className='flex gap-2.5 items-start md:w-1/5 w-full'>
          <div className='md:text-2xl text-lg flex md:min-w-[40px] md:h-[40px] min-w-[28px] h-[28px] justify-center items-center text-secondary border-2 border-secondary rounded-full group relative'>
            <CircleRotating bgColor="#151a4d" border="5px" />
            <FaClock className='relative z-10' />
          </div>
          <div >
            <h6 className='md:text-[26px] md:leading-none text-xl font-bold text-white font-playfair tracking-[-0.6] mb-3'>
              Opening Hours
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <span className='text-sm font-medium text-white font-poppins'>
                  Mon-Fri: 9:00am – 5:00pm
                </span>
              </li>
              <li>
                <span className='text-sm font-medium text-white font-poppins'>
                  Saturday: Closed
                </span>
              </li>
              <li>
                <span className='text-sm font-medium text-white font-poppins'>
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container mx-auto md:px-0 px-4 mt-20 pb-5'>
        <ul className='flex gap-3 items-center justify-center'>
          <li>
            <Link href="#" className='text-xl font-bold text-white hover:text-secondary w-10 h-10 bg-transparent hover:bg-white flex items-center justify-center rounded-md transition-all duration-500 ease-in-out'>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="#" className='text-xl font-bold text-white hover:text-secondary w-10 h-10 bg-transparent hover:bg-white flex items-center justify-center rounded-md transition-all duration-500 ease-in-out'>
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href="#" className='text-xl font-bold text-white hover:text-secondary w-10 h-10 bg-transparent hover:bg-white flex items-center justify-center rounded-md transition-all duration-500 ease-in-out'>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href="#" className='text-xl font-bold text-white hover:text-secondary w-10 h-10 bg-transparent hover:bg-white flex items-center justify-center rounded-md transition-all duration-500 ease-in-out'>
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
      <div className='py-7 border-y border-white/10'>
        <div className='container mx-auto md:px-0 px-4'>
          <p className='md:text-base font-normal text-white font-poppins text-center'>
            Copyright 2022 © Vivid Care Services Ltd, Registered in England & Wales, Company Reg: 13759238
          </p>
          <p className='md:text-base font-normal text-white font-poppins text-center'>
            Website Designed by Advertmetrics Ltd <Link href="/anti-slavery-policy" className='hover:text-secondary'>
              Anti Slavery Policy</Link>  | <Link href="access-webmail" className='hover:text-secondary'>Access Webmail </Link>   | <Link href="staff-login" className='hover:text-secondary'> Staff Login</Link>
          </p>
        </div>
      </div>
      <div className='container mx-auto md:px-0 px-4 pt-7 pb-16'>
        <p className='md:text-base font-normal text-white font-poppins text-center'>
          <Link href="privacy-policy" className='hover:text-secondary'>
            Privacy Policy</Link>  | <Link href="terms-and-conditions" className='hover:text-secondary'>Terms and Conditions </Link>   | <Link href="carbon-footprint" className='hover:text-secondary'> Carbon Footprint</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer