import React from "react";

const ProductCard = ({ product }) => {
  const { name, img, details, price, quantity, minOrder } = product;
  return (
    <div>
      <div className="card lg:max-w-lg h-full bg-white shadow-xl">
        <figure>
          <img className="w-2/4" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">{name}</h2>
          <p>
            <span className="text-primary">Details: </span>
            {details.slice(0, 150)}...
          </p>
          <p className="text-lg font-semibold">
            <span className="text-primary">Price:</span> {price}$
          </p>
          <p className="text-base font-semibold">
            <span className="text-primary">Quantity:</span> {quantity}
          </p>
          <p className="text-base font-semibold">
            <span className="text-primary">Minimum Order:</span> {minOrder}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
