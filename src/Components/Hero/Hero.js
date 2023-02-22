import React from "react";
import "./hero.css";
import { BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
  const getInTouch = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className="hero">
      <div className="hero_left">
        <h1 id="welcome">Welcome to</h1>
        <h1 id="genesis">GENESIS ENERGY</h1>
        <p>
          "Creating value through comprehensive solutions for energy sector"
        </p>
        <p id="getintouch" onClick={getInTouch}>
          Get in Touch{" "}
          <BsArrowRightCircle style={{ transform: "translate(3px,2.5px)" }} />
        </p>
      </div>
    </div>
  );
};

export default Hero;
