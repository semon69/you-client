import React, { useEffect, useState } from 'react';

import SearchLogo from './SearchLogo';
import Followers from './Followers';
import ProfilePhotos from './ProfilePhotos';

const ProfileSide = () => {
    const ProfileSide = false;
    return (
        <div className='profileCard'>
            <SearchLogo></SearchLogo>
            <ProfilePhotos ProfileSide={ProfileSide}></ProfilePhotos>
            <Followers></Followers>
        </div>
    );
};

export default ProfileSide;