import React from "react";
import Banner from "./Banner";
import Footer from "../../shared/Footer";
import About from "./About";
import Quote from "./Quote";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Quote />
      <Footer />
    </div>
  );
};

export default Home;
