import React, { useEffect, useState } from 'react';
import Follower from './Follower';

const Followers = () => {
    const [followers, setFollowers] = useState([])
    console.log(followers);
    useEffect(() => {
        fetch('/followers.json')
            .then(res => res.json())
            .then(data => setFollowers(data))
    }, [])
    return (
        <div>
            <div className='mt-10'>
                <h1 className='text-xl font-bold'>Who is following you?</h1>
                {
                    followers.map(follower => <Follower key={follower.id} follower={follower}></Follower>)
                }
            </div>
        </div>
    );
};

export default Followers;