import React from "react";
import "./ourBrands.css";
import arflu from "../../Assets/arflu_logo.png";
import anggerik from "../../Assets/anggerik_logo.png";
import honeywell from "../../Assets/honeywell_logo.png";
import tristar from "../../Assets/tristar_logo.png";
import appleton from "../../Assets/appleton_logo.png";

const OurBrands = () => {
  return (
    <div className="our_brands_pg">
      <div className="hero_our_brands_pg">
        <div className="hero_overlay_our_brands_pg">
          <h1>Our Brands</h1>
        </div>
      </div>
      <div className="our_brands_content_container">
        <h1>Products</h1>
        <div className="our_brands_container">
          <img src={arflu} alt="" srcset="" />
          <img src={anggerik} alt="" srcset="" />
          <img src={honeywell} alt="" srcset="" />
          <img src={tristar} alt="" srcset="" />
          <img src={appleton} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
