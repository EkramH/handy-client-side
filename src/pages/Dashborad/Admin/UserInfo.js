import React from 'react';
import { toast } from 'react-toastify';

const UserInfo = ({user, index, refetch}) => {
  const {name, email, role} = user;

  const makeAdmin = () => {
    fetch(`https://boiling-garden-19713.herokuapp.com/user/admin/${email}`,{
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      if(res.status === 403){
        toast.error(
          `ERROR: Failed to make admin!`,
          {
            toastId: "error1",
          }
        );
      }
      return res.json()})
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success(
          `${email} is admin now!`,
          {
            toastId: "success1",
          }
        );
        refetch();
      }
    })
  }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name || <p>User</p>}</td>
        <td>{email}</td>
        <td>{role !== "admin" && <button onClick={makeAdmin} className="btn btn-xs text-sm">Make Admin</button>}</td>
        <td><button className="btn btn-xs text-sm">Remove User</button></td>
      </tr>
    );
};

export default UserInfo;