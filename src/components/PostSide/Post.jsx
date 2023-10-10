import React from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';

const Post = ({ post }) => {
    const { img, name, description, likes, liked } = post
    return (
        <div className='p-4 rounded-md my-7 bg-zinc-100'>
            <img className='object-cover w-full rounded-md max-h-96' src={img} alt="" />
            <div className='flex gap-4 py-3 text-3xl'>
                <div className='cursor-pointer '>
                    {
                        liked ?
                            <AiTwotoneHeart className='text-red-600' />
                            :
                            <AiOutlineHeart />
                    }


                </div>
                <BiCommentDetail className='cursor-pointer ' />
                <FiSend className='cursor-pointer ' />
            </div>
            <p>{likes} Likes</p>
            <div className='flex gap-2'>
                <h1 className='font-bold'>{name}</h1>
                <h1>{description}</h1>
            </div>
        </div>
    );
};

export default Post;