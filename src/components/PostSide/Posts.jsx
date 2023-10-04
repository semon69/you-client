import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const Posts = () => {
    return (
        <div>
            <img src={'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="" />
            <div>
                <AiOutlineHeart />
            </div>
            <p>{"100 likes"}</p>
            <div>
                <h1>{'Nomuasu'}</h1>
                <h1>{"Brand new photo of mine"}</h1>
            </div>
        </div>
    );
};

export default Posts;