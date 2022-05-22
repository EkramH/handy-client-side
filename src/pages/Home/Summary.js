import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { FaTools, FaUsers, FaAward } from "react-icons/fa";

const Summary = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-5xl text-accent font-light">
            Handy Is Trust By Others
          </h2>
          <p className="py-4 text-lg">Summary of our company</p>
        </div>
        <div className="grid grid-cols-2 row-gap-8 gap-y-8 md:grid-cols-4">
          <div className="flex flex-col items-center border-accent border-b pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
            <div className="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary">
              <GiEarthAfricaEurope />
            </div>
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">80+</h6>
            <p className="text-sm font-medium tracking-widest uppercase lg:text-base animate-left">
              Countries
            </p>
          </div>
          <div className="flex flex-col items-center border-accent border-b pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
            <div className="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary">
              <FaTools />
            </div>
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">120</h6>
            <p className="text-sm font-medium tracking-widest uppercase lg:text-base animate-left">
              Products
            </p>
          </div>
          <div className="flex flex-col items-center border-accent border-b pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
            <div className="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary">
              <FaUsers />
            </div>
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">1k+</h6>
            <p className="text-sm font-medium tracking-widest uppercase lg:text-base animate-left">
              Clients
            </p>
          </div>
          <div className="flex flex-col items-center border-accent border-b pb-3 mx-2 md:border-b-0 md:mx-0 ">
            <div className="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary">
              <FaAward />
            </div>
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">7</h6>
            <p className="text-sm font-medium tracking-widest uppercase lg:text-base animate-left">
              Awards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
