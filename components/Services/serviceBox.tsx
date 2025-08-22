import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const ServiceBox = ({ data }: any) => {
    return (
        <div className={`bg-cover bg-no-repeat w-full h-[408] rounded-[18px] group`}
            style={{ backgroundImage: `url(${data?.image})` }}>
            <div className='bg-black/0 group-hover:bg-black/60 h-[408] md:px-9 md:py-8 px-5 py-4 flex flex-col justify-between rounded-[18px] transition-all duration-500 ease-in-out'>
                <div className='opacity-0 h-0 group-hover:opacity-100 group-hover:h-[408] transition-all duration-500 ease-in-out'>
                    <h3 className='md:text-[38px] md:leading-none text-2xl font-semibold text-white font-playfair tracking-[-0.6] flex items-center gap-2 mb-3.5'>
                        <Image src={data?.logo} alt='service_logo' width={40} height={40} /> {data?.title}
                    </h3>
                    <p className='md:text-xl text-lg font-normal text-white font-poppins'>
                        {data?.description}
                    </p>
                </div>
                <Link href={data?.link} className='md:text-[21.05px] md:leading-none text-lg font-bold text-white font-poppins hover:text-white/80 flex items-center gap-2 border-b border-white hover:border-white/80 pb-2 w-fit'>
                    {data?.category} <FiExternalLink />
                </Link>
            </div>
        </div>
    )
}

export default ServiceBox