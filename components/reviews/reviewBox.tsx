import React from 'react'
import { FaStar } from 'react-icons/fa'

const ReviewBox = ({ data }: any) => {
    return (
        <div className='bg-white rounded-2xl md:py-9 md:px-10 p-6'>
            <ul className='flex items-center gap-0.5 mb-2'>
                {Array.from({ length: data.rating }).map((_, idx) => (
                    <li key={idx}>
                        <FaStar className='text-[#FFA500]' />
                    </li>
                ))}
            </ul>
            <p className='md:text-xl text-lg font-normal text-black font-poppins mb-8'>
                {data.text}
            </p>
            <h4 className='md:text-[28px] md:leading-none text-xl font-semibold text-black font-playfair'>
                ~ {data.name}
            </h4>
        </div>
    )
}

export default ReviewBox