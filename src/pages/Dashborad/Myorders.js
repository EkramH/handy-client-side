import { signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from "../../firebase.init";

const Myorders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth)
  const navigate = useNavigate();



  useEffect(()=>{
    if(user){
      fetch(`https://boiling-garden-19713.herokuapp.com/purchased?userEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res =>{
        if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate("/");
        }
        return res.json()})
      .then(data => setOrders(data));
    }
  },[user, navigate])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/purchased/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            const remaining = orders.filter(
              (order) => order._id !== id
            );
            setOrders(remaining);
            toast.success(`Order item deleted!`);
          });
      }
    });
  };


    return (
        <div>
        <h2 className="text-2xl p-4 text-primary">My Orders: {orders.length} item</h2>
        <div className="overflow-x-auto px-2">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
  
            <tbody>

              {
                orders.map((order, index) => 
                  <tr key={index} order={order}>
                    <th>{index + 1}</th>
                    <td>{order.itemName}</td>
                    <td>{order.quantity}</td>
                    <td>{order.userEmail}</td>
                    <td><button onClick={() => handleDelete(order._id)} className="btn btn-xs bg-red-500 text-white">Delete Item</button></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Myorders;