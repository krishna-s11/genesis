import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Hero from "../../Components/Hero/Hero";
import OurCustomers from "../../Components/OurCustomers/OurCustomers";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutUs />
      <OurCustomers />
      <WhatWeDo />
    </div>
  );
};

export default Home;
