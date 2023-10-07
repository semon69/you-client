import React from 'react';
import PostShare from './PostShare';
import Posts from './Posts';

const PostSide = () => {
    return (
        <div className=''>
            <PostShare></PostShare>
            <div>
                <Posts></Posts>
            </div>
        </div>
    );
};

export default PostSide;