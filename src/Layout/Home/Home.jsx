import React from 'react';
import "./Home.css"
import ProfileSide from '../../components/ProfileSide/ProfileSide';

const Home = () => {
    return (
        <div className='home p-4'>
            <ProfileSide></ProfileSide>
            <div  className='bg-green-400'>
                <p>Feed</p>
            </div>
            <div className='bg-blue-400' >
                <p>Settings</p>
            </div>
        </div>
    );
};

export default Home;