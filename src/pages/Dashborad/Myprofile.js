import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';
import UpdateProfile from './UpdateProfile';

const Myprofile = () => {
    const [user] = useAuthState(auth);

    const {data: updateUser, isLoading, refetch } = useQuery('updateUser', ()=> fetch(`https://boiling-garden-19713.herokuapp.com/user/${user.email}`)
    .then((res) => res.json()))

    if(isLoading){
        return <Loading true/>
    }

    return (
        <div>
            <h2 className="text-2xl p-4 text-primary">My Profile</h2>
            <div className=" flex items-center flex-col">
                <h2 className='text-4xl py-5 font-semibold'>{user.displayName }</h2>
                <h3 className='text-3xl py-3'>{user.email }</h3>
                <p className='text-lg'>Address: {updateUser.address}</p>
                <p className='text-lg py-5'>Github Link: {updateUser.github} </p>
            </div>
            <UpdateProfile refetch={refetch}/>
    </div>
    );
};

export default Myprofile;