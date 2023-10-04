import React from 'react';
import "../../App.css"

const Followers = ({ follower }) => {
    return (
        <div className='mt-4'>
            
            <div className='flex justify-between items-center gap-1'>
                <div className='flex items-center gap-2'>
                    <img className='w-16 h-16 rounded-full' src={follower.img} alt="" />
                    <div>
                        <p className='font-semibold'>{follower.name}</p>
                        <p>{follower.title}</p>
                    </div>
                </div>
                <button className='btn-primary px-3 py-1 rounded hover:text-blue-900 font-bold border-2 border-blue-900'>Follow</button>
            </div>
        </div>
    );
};

export default Followers;