import { signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";

const Myorders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/purchased?userEmail=${user.email}`, {
        method: "GET",
        headers: {
          "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res =>{
        console.log('res', res);
        if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate("/");
        }
        return res.json()})
      .then(data => setOrders(data));
    }
  },[user])


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