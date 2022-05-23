import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../shared/Footer";

const Purchase = () => {
  const { productsId } = useParams();

  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productsId}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [productsId]);

  return (
    <div>
      <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="lg:max-w-lg">
            <h2 className="text-5xl font-bold">{purchase.name}</h2>
            <img className="mx-auto my-6" src={purchase.img} alt="" />
            <p className="py-3 text-base">{purchase.details}</p>
            <p className="text-3xl text-primary pb-2">
              Price: {purchase.price}$
            </p>
            <div className="flex justify-evenly mb-5 font-semibold">
              <p>Quantity: {purchase.quantity}</p>
              <p>Minimum Order: {purchase.minOrder}</p>
            </div>

            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
