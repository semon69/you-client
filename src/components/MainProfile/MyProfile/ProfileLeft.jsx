import React from 'react';
import SearchLogo from '../../LeftSide/SearchLogo';
import Followers from '../../LeftSide/Followers';
import YourInfo from './YourInfo';

const ProfileLeft = () => {
    return (
        <div>
            <SearchLogo></SearchLogo>
            <YourInfo></YourInfo>
            <Followers></Followers>
        </div>
    );
};

export default ProfileLeft;