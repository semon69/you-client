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
                    <form className="">
                        <h3>Your info</h3>

                        <div>
                            <input
                                type="text"
                                className=""
                                name="FirstName"
                                placeholder="First Name"
                            />

                            <input
                                type="text"
                                className=""
                                name="LastName"
                                placeholder="Last Name"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className=""
                                name="worksAT"
                                placeholder="Works at"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className=""
                                name="livesIN"
                                placeholder="LIves in"
                            />

                            <input
                                type="text"
                                className=""
                                name="Country"
                                placeholder="Country"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className=""
                                placeholder="RelationShip Status"
                            />
                        </div>


                        <div>
                            Profile Image
                            <input type="file" name='profileImg' />
                            Cover Image
                            <input type="file" name="coverImg" />
                        </div>

                        <button className="button infoButton">Update</button>
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