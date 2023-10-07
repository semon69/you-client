import React, { useEffect, useState } from 'react';
import PostShare from './PostShare';
import Posts from './Posts';
import { json } from 'react-router-dom';

const PostSide = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch("/posts.json")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div className='overflow-auto height'>
            <PostShare></PostShare>
            <div className=''>
                {
                    posts.map(post => <Posts key={post._id} post={post}></Posts>)
                }
                
            </div>
        </div>
    );
};

export default PostSide;