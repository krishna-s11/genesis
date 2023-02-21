import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Hero from "../../Components/Hero/Hero";
import OurBrands from "../../Components/OurBrands/OurBrands";
import OurCustomers from "../../Components/OurCustomers/OurCustomers";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutUs />
      <OurBrands />
      <WhatWeDo />
      <OurCustomers />
    </div>
  );
};

export default Home;
