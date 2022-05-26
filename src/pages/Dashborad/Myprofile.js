import React from 'react';
import UpdateProfile from './UpdateProfile';

const Myprofile = () => {
    return (
        <div>
            <h2 className="text-2xl p-4 text-primary">My Profile</h2>
            <div className=" flex items-center flex-col">
                <h2 className='text-4xl py-5'>User Name</h2>
                <h3 className='text-3xl py-3'>User Email</h3>
                <p className='text-lg'>Address: </p>
                <p className='text-lg py-5'>Github Link: </p>
            </div>
            <UpdateProfile/>
    </div>
    );
};

export default Myprofile;