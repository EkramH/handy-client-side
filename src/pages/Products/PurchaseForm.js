import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const PurchaseForm = ({ purchase, productsId, refetch }) => {
  const [user] = useAuthState(auth);
  const [isDisabled, setDisabled] = useState(false);

  const navigate = useNavigate()

  const purchaseForm = (event) => {
    event.preventDefault();
    const orderQuantity = event.target.quantity.value;
    const phoneNumber = event.target.phone.value;
    const address = event.target.address.value;

    const purchased = {
      purchasedId : purchase._id,
      itemName: purchase.name,
      name : user.displayName,
      userEmail : user.email,
      address: address,
      phone: phoneNumber,
      quantity: orderQuantity
    }

    if(purchase.quantity === 0){
      toast.error(
        `ERROR : Product is not avaiable `,
        {
          toastId: "error1",
        }
      );
      setDisabled(true);
    }
    else if(orderQuantity > purchase.quantity){
      toast.error(
        `ERROR : Your order qunatity ${orderQuantity}. You have to order and less then ${purchase.quantity}`,
        {
          toastId: "error1",
        }
      );
      setDisabled(true);
    }
    else if( orderQuantity < 10) {
      toast.error(
        `ERROR : Your order qunatity ${orderQuantity}. You have to order more then 10 quantity`,
        {
          toastId: "error1",
        }
      );
      setDisabled(true);

    } else{ 
      const newQuantity = purchase.quantity - orderQuantity;
      const updatedQuantity = { newQuantity };
      
      // quantity
      fetch(`http://localhost:5000/product/${productsId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedQuantity),
      })
      .then((res) => res.json()) 
      
      //purchased
      fetch(`http://localhost:5000/purchased`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(purchased),
      })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          title: "Your purchase is complete!",
          text: "Go to dashboard check your item.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yeahh ",
        }).then((result) => {
          if (result.isConfirmed){
            navigate('/dashboard/orders');
          }
        })
        refetch();
      })
    }

  };

  const quantityHandle = () =>{
    setDisabled(false);
  }
  return (
    <div>
      <form
        onSubmit={purchaseForm}
        className="grid grid-cols-1 gap-3 justify-items-center pt-5"
      >
        <input
          type="text"
          value={purchase?.name || ""}
          disabled
          className="input input-bordered w-full max-w-xs font-semibold"
        />
        <input
          type="text"
          name="name"
          value={user?.displayName || ""} //undefined value to definer value error solved with || "".
          disabled
          className="input input-bordered w-full max-w-xs font-semibold"
        />
        <input
          type="email"
          name="email"
          value={user?.email || ""} //undefined value to definer value error solved with || "".
          disabled
          className="input input-bordered w-full max-w-xs font-semibold"
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
        onClick={quantityHandle}
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          disabled={isDisabled}
          type="submit"
          value="Submit"
          className="btn btn-secondary input-bordered w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default PurchaseForm;
