import React from "react";
import Banner from "./Banner";
import Footer from "../../shared/Footer";
import About from "./About";
import Quote from "./Quote";
import Summary from "./Summary";
import ProductHome from "./ProductHome";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Summary />
      <ProductHome />
      <Quote />
      <Footer />
    </div>
  );
};

export default Home;
