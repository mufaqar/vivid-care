import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchForm = () => {
    return (
        <div className=''>
            <form className='flex md:flex-row flex-col items-center md:gap-9 gap-4 bg-white rounded-[50px] md:pl-10 pl-2 pr-2 py-2.5'>
                <div className='flex md:flex-row flex-col items-center md:divide-x md:divide-y-0 divide-y divide-black/20 md:w-2/3 w-full'>
                    <div>
                        <label htmlFor='postcode' className='hidden'>
                            Enter your postcode
                        </label>
                        <input placeholder='Enter your postcode'
                            name='postcode'
                            id='postcode'
                            className='text-lg font-medium text-black/80 placeholder:text-black/80 w-full bg-transparent border-none focus:border-b focus:border-primary focus:outline-0 px-3.5 py-3.5' />
                    </div>
                    <div>
                        <label htmlFor='service' className='hidden'>
                            How can we help?
                        </label>
                        <select className='text-lg font-medium text-black/80 placeholder:text-black/80 w-full bg-transparent border-none focus:border-b focus:border-primary focus:outline-0 px-3.5 py-3.5'>
                            <option selected>How can we help?</option>
                            <option value="water">Water Care Services</option>
                            <option value="Compass">Compass Care Services</option>
                        </select>
                    </div>
                </div>
                <button className='bg-primary hover:bg-secondary text-lg font-bold text-white py-4 flex items-center gap-2 justify-center rounded-[50px] md:w-1/3 w-full'>
                    Find Care <AiOutlineSearch className='md:text-2xl text-lg' />
                </button>
            </form>
        </div>
    )
}

export default SearchForm