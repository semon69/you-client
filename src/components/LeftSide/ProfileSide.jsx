import React, { useEffect, useState } from 'react';

import SearchLogo from './SearchLogo';
import Followers from './Followers';
import ProfilePhotos from './ProfilePhotos';

const ProfileSide = () => {

    return (
        <div className='profileCard'>
            <SearchLogo></SearchLogo>
            <ProfilePhotos></ProfilePhotos>
            <Followers></Followers>
        </div>
    );
};

export default ProfileSide;