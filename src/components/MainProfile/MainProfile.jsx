import React from 'react';
import "../../Layout/Home/Home.css"
import ProfileLeft from './MyProfile/ProfileLeft';

const MainProfile = () => {
    return (
        <div className='p-4 home'>
            <ProfileLeft></ProfileLeft>
        </div>
    );
};

export default MainProfile;