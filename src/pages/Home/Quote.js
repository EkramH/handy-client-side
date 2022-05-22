import React from "react";
import quoteBg from "../../assets/quoteBg.jpg";
const Quote = () => {
  return (
    <div>
      <div
        className="hero mt-10"
        style={{ backgroundImage: `url(${quoteBg})`, minHeight: "60vh" }}
      >
        <div className="bg-base-100 shadow-xl py-10 rounded-lg lg:w-1/2 sm:w-3/4 w-11/12 my-5">
          <h2 className="text-5xl text-center mb-5 text-accent font-light">
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
              <button className="btn btn-outline btn-primary">Button</button>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card-body">
              <p>
                <span className="text-accent text-base">For Business:</span> Do
                you have questions about how Manufactory can help your company?
                Send us an email and we'll get in touch shortly
              </p>
              <p>
                <span className="text-accent text-base">Note:</span> Your
                details are kept strictly confidential as per our Company
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
