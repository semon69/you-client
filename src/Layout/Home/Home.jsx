import React from 'react';
import "./Home.css"
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import PostSide from '../../components/PostSide/PostSide';

const Home = () => {
    return (
        <div className='home p-4'>
            <ProfileSide></ProfileSide>
            <PostSide></PostSide>
            <div className='bg-blue-400' >
                <p>Settings</p>
            </div>
        </div>
    );
};

export default Home;