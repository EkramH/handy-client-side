import React from "react";
import quoteBg from "../../assets/quoteBg.jpg";
const Quote = () => {
  return (
    <div>
      <div
        className="hero mt-10"
        style={{ backgroundImage: `url(${quoteBg})`, minHeight: "60vh" }}
      >
        <div className="bg-base-100 shadow-xl py-10 rounded-lg">
          <h2 className="text-5xl text-center mb-5 text-yellow-400">
            Request a Quote
          </h2>
          <div className="card lg:card-side p-3">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-primary w-full max-w-xs my-1"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-primary w-full max-w-xs my-1"
              />
              <textarea
                className="textarea textarea-primary input input-bordered w-full max-w-xs min-h-16 my-1"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
