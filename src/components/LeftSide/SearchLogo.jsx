import React from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from "/img/logo.png"

const SearchLogo = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <img className='w-12 h-12 rounded-full mr-1' src={logo} alt="" />
                <input type="text" placeholder='#Explore' className='bg-gray-200 p-2 outline-none border-none rounded-s' />
                <FiSearch className='button w-10 h-10 rounded-e' />
            </div>
        </div>
    );
};

export default SearchLogo;