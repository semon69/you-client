import React, { useEffect, useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { MdNotificationsNone } from 'react-icons/md';
import { BiCommentDetail } from 'react-icons/bi';
import "../../App.css"

const RightSide = () => {
    const [trends, setTrends] = useState([])
    useEffect(() => {
        fetch('/trends.json')
            .then(res => res.json())
            .then(data => setTrends(data))
    }, [])
    return (
        <div>
            <div className='flex justify-between mt-5 text-2xl'>
                <AiFillHome className='text-blue-800' />
                <FiSettings />
                <MdNotificationsNone />
                <BiCommentDetail />
            </div>
            <div className='p-4 mt-6 mb-3 rounded-md bg-zinc-100'>
                <h1 className='mb-5 text-xl font-bold'>Trends of yours</h1>
                {
                    trends.map(trend =>
                        <div key={trend._id} className='my-3'>
                            <h1 className='font-bold'>#{trend.name}</h1>
                            <h1>{trend.number}k shares</h1>
                        </div>

                    )
                }
            </div>
            <div className='p-6'>
                <button className='w-full h-12 btn-primary'>Share</button>
            </div>
        </div>
    );
};

export default RightSide;