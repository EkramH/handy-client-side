import React from 'react';
import error from '../assets/error.png';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={error} alt='' />
        </div>
    );
};

export default NotFound;