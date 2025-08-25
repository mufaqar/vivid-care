import Image from 'next/image'
import React from 'react'

const OurFocus = () => {
    return (
        <section className='md:py-20 py-16'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-6 justify-between'>
                <div className='md:w-fit w-full'>
                    <Image src="/images/our-focus.png" alt="our-focus" width={543} height={509} />
                </div>
                <div className='md:w-[55%] w-full grid md:grid-cols-2 grid-cols-1 gap-12'>
                    <div>
                        <Image src="/images/independance.png" alt="independance" width={62} height={62} />
                        <h3 className='md:text-[28px] md:leading-none text-2xl font-semibold text-black font-playfair tracking-[-0.6] mb-3.5 mt-5'>
                            Independence Focused
                        </h3>
                        <p className='md:text-xl text-lg font-normal text-black font-poppins'>
                            Helping you achieve the independence you deserve in a home that's truly yours.
                        </p>
                    </div>
                    <div>
                        <Image src="/images/approach.png" alt="approach" width={62} height={62} />
                        <h3 className='md:text-[28px] md:leading-none text-2xl font-semibold text-black font-playfair tracking-[-0.6] mb-3.5 mt-5'>
                           Person-Centred Approach
                        </h3>
                        <p className='md:text-xl text-lg font-normal text-black font-poppins'>
                            Your life, your home, your choices. We provide support that makes it all possible.
                        </p>
                    </div>
                    <div>
                        <Image src="/images/quality.png" alt="quality" width={62} height={62} />
                        <h3 className='md:text-[28px] md:leading-none text-2xl font-semibold text-black font-playfair tracking-[-0.6] mb-3.5 mt-5'>
                            Quality & Safety
                        </h3>
                        <p className='md:text-xl text-lg font-normal text-black font-poppins'>
                            Quality support and safe professional care. Giving you confidence to live life on your own terms.
                        </p>
                    </div>
                    <div>
                        <Image src="/images/empowerment.png" alt="empowerment" width={62} height={62} />
                        <h3 className='md:text-[28px] md:leading-none text-2xl font-semibold text-black font-playfair tracking-[-0.6] mb-3.5 mt-5'>
                           Empowerment & Growth
                        </h3>
                        <p className='md:text-xl text-lg font-normal text-black font-poppins'>
                           Empowering individuals to build meaningful, independent lives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFocus