import React from "react";
import heroBg from "../../assets/heroBg.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${heroBg})`, minHeight: "90vh" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="mb-5 w-11/12 flex-col items-center justify-center sm:mb-10  sm:w-2/3 lg:flex">
            <h1 className="text-center text-2xl font-black leading-7 text-secondary sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl">
              <span className="text-primary"> Handy </span> All in one place for
              top class material <span className="text-primary"> Tools </span>{" "}
              and best <span className="text-primary"> Manufacturer </span>.
            </h1>
            <p className="mt-5 text-center text-sm font-normal text-secondary sm:mt-10 sm:text-lg lg:w-10/12">
              We are the Handy Manufacturer build top class tools. We have lots
              of different tools. Just check below our currently stocked
              product.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <a href="#price">
              <button className="rounded border border-primary bg-primary px-4 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-orange-500 sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
                Buy Now
              </button>
            </a>
            <button className="ml-4 rounded border border-primary bg-transparent px-4 py-2 text-sm text-secondary transition duration-150 ease-in-out hover:border-orange-500 hover:text-primary sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
