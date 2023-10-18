import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import "../../../App.css"

const YourInfo = () => {
    return (
        <div className='my-5 px-4 py-6 shadow-md rounded'>
            <div className='flex justify-between'>
                <p className='text-xl font-bold'>Your Info</p>
                <FaPencilAlt className='text-xl hover:cursor-pointer' onClick={() => document.getElementById('my_modal_2').showModal()} />
            </div>
            <div className='my-5 space-y-1'>
                <div className='flex space-x-2'>
                    <p className='font-bold'>Status </p>
                    <p>In Relationship</p>
                </div>
                <div className='flex space-x-2'>
                    <p className='font-bold'>Lives In </p>
                    <p>Dhaka</p>
                </div>
                <div className='flex space-x-2'>
                    <p className='font-bold'>Works At </p>
                    <p>Programming Hero</p>
                </div>
            </div>
            <button className='btn-primary self-end'>Logout</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form className="space-y-4 ">
                        <h3 className='font-bold text-xl'>Your info</h3>

                        <div className='flex justify-between'>
                            <input
                                type="text"
                                className="outline-none p-2 border-2 rounded-md"
                                name="FirstName"
                                placeholder="First Name"
                            />

                            <input
                                type="text"
                                className="outline-none p-2 border-2 rounded-md "
                                name="LastName"
                                placeholder="Last Name"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="outline-none p-2 border-2 rounded-md w-full"
                                name="worksAT"
                                placeholder="Works at"
                            />
                        </div>

                        <div className='flex justify-between'>
                            <input
                                type="text"
                                className="outline-none p-2 border-2 rounded-md"
                                name="livesIN"
                                placeholder="LIves in"
                            />

                            <input
                                type="text"
                                className="outline-none p-2 border-2 rounded-md"
                                name="Country"
                                placeholder="Country"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="outline-none p-2 border-2 rounded-md w-full"
                                placeholder="RelationShip Status"
                            />
                        </div>


                        <div className='flex gap-2'>
                            <p className='font-bold'>Profile Image</p>
                            <input type="file" name='profileImg' className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-bold'>Cover Image</p>
                            <input type="file" name="coverImg" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        <button className="btn-primary">Update</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default YourInfo;