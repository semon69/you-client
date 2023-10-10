import React from 'react';
import ProfilePhotos from '../../LeftSide/ProfilePhotos';
import Posts from '../../PostSide/Posts';
import "./MyProfile.css"
import PostShare from '../../PostSide/PostShare';

const CenterProfile = () => {
    return (
        <div className='overflow-auto height'>
            <ProfilePhotos></ProfilePhotos>
            <PostShare></PostShare>
            <Posts></Posts>
        </div>
    );
};

export default CenterProfile;