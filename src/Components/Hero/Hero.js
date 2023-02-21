import React from "react";
import "./hero.css";
import { BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h1 id="welcome">Welcome to</h1>
        <h1 id="genesis">GENESIS ENERGY</h1>
        <p>
          "Creating value through compehrensive solutions for energy sector"
        </p>
        <p id="getintouch">
          Get in Touch{" "}
          <BsArrowRightCircle style={{ transform: "translate(3px,2.5px)" }} />
        </p>
      </div>
    </div>
  );
};

export default Hero;
