import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("/posts.json")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <div className=''>
                {
                    posts.map(post => <Post key={post._id} post={post}></Post>)
                }

            </div>
        </div>
    );
};

export default Posts;