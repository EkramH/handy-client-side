import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const PurchaseForm = ({ purchase, productsId }) => {
  const [user] = useAuthState(auth);

  const purchaseForm = (event) => {
    event.preventDefault();
    const orderQuantity = event.target.quantity.value;
    const newQuantity = purchase.quantity - orderQuantity;
    const updatedQuantity = { newQuantity };
    console.log(updatedQuantity);

    fetch(`http://localhost:5000/product/${productsId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
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
          type="number"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          min="10"
          max="199"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-secondary input-bordered w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default PurchaseForm;
