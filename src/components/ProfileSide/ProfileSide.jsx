import React from 'react';
import { FiSearch } from 'react-icons/fi';
import "./ProfileSide.css"

const ProfileSide = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-center'>
                <img className='w-16 rounded-full mr-1' src="../../../public/img/logo.png" alt="" />
                <input type="text" placeholder='#Explore' className='bg-gray-200 p-2 outline-none border-none rounded-s' />
                <FiSearch className='button w-10 h-10 rounded-e' />
            </div>
            <div className='profileCard shadow-xl rounded-xl'>
                <div className='images'>
                    <img className='w-full rounded-t-2xl' src="https://cdn.pixabay.com/photo/2016/08/16/03/24/forest-1597029_1280.png" alt="" />
                    <img className='img2' src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
                </div>
                <div className='flex justify-center items-center flex-col mt-10 text-xl'>
                    <span className='font-bold'>Abdul Halim</span>
                    <span>Electrical Engineer</span>
                </div>
                <div className='p-3'>
                    <hr />
                    <div className='flex justify-between p-3'>
                        <div className='follow'>
                            <span className='font-bold'>6969</span>
                            <span>Followings</span>
                        </div>
                        <div className='vl'> </div>
                        <div className='follow'>
                            <span className='font-bold'>1</span>
                            <span>Followers</span>
                        </div>
                    </div>
                    <hr />
                </div>
                <div>
                    <p className='text-center font-bold text-blue-900 pb-3'>My Profile</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileSide;