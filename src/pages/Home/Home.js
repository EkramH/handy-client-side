import React from "react";
import Banner from "./Banner";
import Footer from "../../shared/Footer";
import About from "./About";
import Quote from "./Quote";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Summary />
      <Quote />
      <Footer />
    </div>
  );
};

export default Home;
