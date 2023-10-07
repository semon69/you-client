import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';

const Posts = () => {
    return (
        <div className='p-4 rounded-md bg-zinc-100'>
            <img className='object-cover w-full rounded-md max-h-96' src={'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="" />
            <div className='flex gap-4 py-3 text-3xl'>
                <div>
                    <AiOutlineHeart />
                </div>
                <BiCommentDetail />
                <FiSend />
            </div>
            <p>{"100 likes"}</p>
            <div className='flex gap-2'>
                <h1 className='font-bold'>{'Nomuasu'}</h1>
                <h1>{"Brand new photo of mine"}</h1>
            </div>
        </div>
    );
};

export default Posts;