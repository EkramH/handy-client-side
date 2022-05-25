import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error.png';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={error} alt='' />
        </div>
    );
};

export default NotFound;