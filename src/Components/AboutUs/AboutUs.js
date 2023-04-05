import React from "react";
import "./aboutus.css";
import img1 from "../../Assets/products.jpeg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus_lifted_box">
        <div className="aboutus_lifted_box_left">
          <h1>About Us</h1>
          <p style={{ marginBottom: "30px" }}>
            Established in 2008, under the aegis of industry stalwarts having
            more than 40 years of industry experience and exposure to all
            aspects of product and project lifecycle.
          </p>
          <p style={{ marginBottom: "30px" }}>
            {" "}
            Genesis Energy has rapidly established a reputation for offering
            dynamic solutions with adroitness.
          </p>
          <Link to="/about_us">
            <a href="none">Read more -{">"}</a>
          </Link>
        </div>
        <div className="aboutus_lifted_box_right">
          <img src={img1} alt="about us" className="aboutus_img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
