import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="-mt-20 lg:mx-20 md:mx-10 mx-5">
      <div className="card lg:card-side bg-base-100 shadow-xl lg:w-3/4 m-auto">
        <figure className="p-5">
          <img src={about} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl text-accent font-light">
            About Company
          </h2>
          <p>
            We are leading company in this field, We provide specific solutions
            for our every customers.
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">More About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
