import React, { useEffect } from "react";
import "./ourBrands.css";
import arflu from "../../Assets/logo-arflu.png";
import anggerik from "../../Assets/anggerik_logo.png";
import honeywell from "../../Assets/honeywell_logo.png";
import uop_callidus from "../../Assets/honeywell_uop.webp";
import tristar from "../../Assets/tristar_logo.png";
import appleton_logo from "../../Assets/appleton.png";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, where, collection, query } from "firebase/firestore";

const OurBrands = () => {
  useEffect(() => {});

  return (
    <div className="our_brands_pg">
      <div className="hero_our_brands_pg">
        <div className="hero_overlay_our_brands_pg">
          <h1>Our Brands</h1>
        </div>
      </div>
      <div className="our_brands_content_container">
        <h1>Brands</h1>
        <div className="our_brands_container">
          <div className="logo_container">
            <Link to="/brands/products/arflu">
              <img src={arflu} alt="" srcset="" id="arflu" />
            </Link>
          </div>
          <div className="logo_container">
            <Link to="/brands/products/anggerik_laksana">
              <img src={anggerik} alt="" id="anggerik_brand" srcset="" />
            </Link>
          </div>
          <div className="logo_container">
            <Link to="/brands/products/appleton">
              <img src={appleton_logo} id="appleton_brand" alt="" srcset="" />
            </Link>
          </div>
          <div className="logo_container">
            <Link to="/brands/products/honeywell">
              <img src={honeywell} alt="" id="honeywell_brand" srcset="" />
            </Link>
          </div>
          <div className="logo_container tristar_cont">
            <Link to="/brands/products/tristar">
              <img src={tristar} alt="" id="tristar_brand" srcset="" />
            </Link>
          </div>
          <div className="logo_container tristar_cont">
            <Link to="/brands/products/uop_callidus">
              <img src={uop_callidus} alt="" id="tristar_brand" srcset="" />
            </Link>
          </div>
        </div>
        {/* <div className="our_brands_container sec_row"> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default OurBrands;
