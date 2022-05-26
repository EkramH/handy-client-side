import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

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

  const handleDelete = (email) =>{
    Swal.fire({
      title: "Are you sure to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://boiling-garden-19713.herokuapp.com/user/${email}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            toast.success(`User Delete`);
            refetch()
        });
      }
    });
  }

    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name || <p>User</p>}</td>
        <td>{email}</td>
        <td>{role !== "admin" && <button onClick={makeAdmin} className="btn btn-xs text-sm">Make Admin</button>}</td>
        <td><button onClick={() => handleDelete(email)} className="btn btn-xs text-sm bg-red-600 text-white">Remove User</button></td>
      </tr>
    );
};

export default UserInfo;