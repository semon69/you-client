import React from 'react';
import "../../Layout/Home/Home.css"
import ProfileLeft from './MyProfile/ProfileLeft';
import CenterProfile from './MyProfile/CenterProfile';
import ProfileRight from './MyProfile/ProfileRight';

const MainProfile = () => {
    return (
        <div className='p-4 home'>
            <ProfileLeft></ProfileLeft>
            <CenterProfile></CenterProfile>
            <ProfileRight></ProfileRight>
        </div>
    );
};

export default MainProfile;