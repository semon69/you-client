import React from 'react';
import { FaImage, FaVideo } from 'react-icons/fa';
import { FcCalculator } from 'react-icons/fc';
import { ImLocation2 } from 'react-icons/im';
import "./PostSide.css"
import "../../App.css"

const PostShare = () => {
    return (
        <div className='flex gap-2 bg-zinc-100 p-3 rounded'>
            <img className='profileImg' src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
            <div className='flex flex-col w-full gap-3'>
                <div>
                    <input type="text" placeholder="What's happening?" className='bg-gray-200 p-2 outline-none border-none rounded w-full' />
                </div>
                <div className='postOption'>
                    <div className='option text-green-600'>
                        <FaImage />
                        <span>Image</span>
                    </div>
                    <div className='option text-blue-600'>
                        <FaVideo />
                        <span>Video</span>
                    </div>
                    <div className='option text-red-400'>
                        <ImLocation2 />
                        <span>Location</span>
                    </div>
                    <div className='option text-orange-400'>
                        <FcCalculator />
                        <span>Shedule</span>
                    </div>
                    <button className='btn-primary'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default PostShare;