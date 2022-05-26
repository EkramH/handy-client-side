import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading';
import UserInfo from './UserInfo';

const Alluser = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h2 className="text-2xl p-4 text-primary">All User: {users.length}</h2>
            <div className="overflow-x-auto px-2">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
  
            <tbody>
              {
                  users.map((user, index) => <UserInfo key={user._id} user={user} index={index} refetch={refetch}></UserInfo>)
              }
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default Alluser;