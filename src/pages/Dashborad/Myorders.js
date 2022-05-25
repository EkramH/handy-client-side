import React, {useEffect, useState} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Myorders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth)

  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/purchased?userEmail=${user.email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
    }
  },[user])


    return (
        <div>
        <h2 className="text-2xl p-4 text-primary">My Orders: {orders.length}</h2>
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