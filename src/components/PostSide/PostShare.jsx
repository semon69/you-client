import React, { useRef, useState } from 'react';
import { FaImage, FaVideo } from 'react-icons/fa';
import { FcCalculator } from 'react-icons/fc';
import { ImLocation2, ImCross } from 'react-icons/im';
import "./PostSide.css"
import "../../App.css"

const PostShare = () => {
    const [image, setImage] = useState('')
    const imageRef = useRef()
    const onImageChange = (event) => {
        event.preventDefault()
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }
    return (
        <div>
            <div className='flex gap-2 p-3 mb-4 rounded bg-zinc-100'>
                <img className='profileImg' src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
                <div className='flex flex-col w-full gap-3'>
                    <div>
                        <input type="text" placeholder="What's happening?" className='w-full p-2 bg-gray-200 border-none rounded outline-none' />
                    </div>
                    <div className='postOption'>
                        <div onClick={() => imageRef.current.click()} className='text-green-600 cursor-pointer option'>
                            <FaImage />
                            <span>Image</span>
                        </div>
                        <div className='text-blue-600 cursor-pointer option'>
                            <FaVideo />
                            <span>Video</span>
                        </div>
                        <div className='text-red-400 cursor-pointer option'>
                            <ImLocation2 />
                            <span>Location</span>
                        </div>
                        <div className='text-orange-400 cursor-pointer option'>
                            <FcCalculator />
                            <span>Shedule</span>
                        </div>
                        <button className='btn-primary'>Share</button>
                        <div className='hidden'>
                            <input type="file" name="myImage" id="" ref={imageRef} onChange={onImageChange} />
                        </div>
                    </div>
                </div>

            </div>
            {
                image &&

                <div className='relative border-2'>
                    <ImCross className='absolute p-1 text-xl border rounded cursor-pointer right-2 top-2 bg-zinc-300' onClick={()=> setImage('')} />
                    <img className='object-cover object-center w-full max-h-96'  src={image.image} alt="" />
                </div>
            }
        </div>
    );
};

export default PostShare;