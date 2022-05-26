import React from "react";
import loading from "../assets/loading.gif"

const Loading = () => {
  return (
    <div className="flex justify-center">
      <img src={loading} alt=""/>
    </div>
  );
};

export default Loading;
