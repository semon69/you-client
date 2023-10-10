import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import "../../../App.css"

const YourInfo = () => {
    return (
        <div className='my-5 px-4 py-6 shadow-md rounded'>
            <div className='flex justify-between'>
                <p className='text-xl font-bold'>Your Info</p>
                <FaPencilAlt />
            </div>
            <div className='my-5 space-y-1'>
                <div className='flex space-x-2'>
                    <p className='font-bold'>Status </p>
                    <p>In Relationship</p>
                </div>
                <div className='flex space-x-2'>
                    <p className='font-bold'>Lives In </p>
                    <p>Dhaka</p>
                </div>
                <div className='flex space-x-2'>
                    <p className='font-bold'>Works At </p>
                    <p>Programming Hero</p>
                </div>
            </div>
            <button className='btn-primary self-end'>Logout</button>

        </div>
    );
};

export default YourInfo;