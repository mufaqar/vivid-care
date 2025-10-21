import { Review } from '@/lib/gql-types';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Props {
    testimonial: Review;
}

const ReviewBox = ({ testimonial }: Props) => {
    return (
        <div className="bg-white rounded-2xl md:py-9 md:px-10 p-6 h-full">
            <ul className="flex items-center gap-0.5 mb-2">
                {Array.from({ length: testimonial?.reviewInfo?.rating || 5 }).map((_, idx) => (
                    <li key={idx}>
                        <FaStar className="text-[#FFA500]" />
                    </li>
                ))}
            </ul>
            <div className="md:text-xl text-lg font-normal text-black font-poppins mb-8"
                dangerouslySetInnerHTML={{ __html: testimonial?.content || "" }} />
            <h4 className="md:text-[28px] md:leading-none text-xl font-semibold text-black font-playfair">
                ~ {testimonial?.title}
            </h4>
        </div>
    );
};

export default ReviewBox;
