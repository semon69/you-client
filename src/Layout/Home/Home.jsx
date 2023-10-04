import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className='home p-4'>
            <div  className='bg-red-200'>
                <p>Profile</p>
            </div>
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