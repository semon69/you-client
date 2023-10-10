import React from 'react';
import SearchLogo from '../../LeftSide/SearchLogo';
import Followers from '../../LeftSide/Followers';

const ProfileLeft = () => {
    return (
        <div>
            <SearchLogo></SearchLogo>
            <Followers></Followers>
        </div>
    );
};

export default ProfileLeft;