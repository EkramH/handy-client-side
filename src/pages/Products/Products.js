import React from "react";
import useProducts from "../../hooks/useProducts";
import Footer from "../../shared/Footer";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products] = useProducts();

  
  return (
    <div>
      <div>
        <h2 className="text-5xl text-primary font-light text-center my-11">
          All Products
        </h2>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center my-10 mx-3 md:mx-6 lg:mx-12">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
