import React from 'react';
import PostShare from './PostShare';
import Posts from './Posts';

const PostSide = () => {
    
    return (
        <div className='overflow-auto height'>
            <PostShare></PostShare>
            <Posts></Posts>
        </div>
    );
};

export default PostSide;