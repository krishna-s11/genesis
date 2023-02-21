import React from "react";
import "./services.css";
import manufacturer from "../../Assets/manufacturer.jpg";
import shipment from "../../Assets/shipment.jpg";
import sales from "../../Assets/sales.jpeg";
import strategic from "../../Assets/strategic.jpeg";
import epc from "../../Assets/epc.jpg";
import aftersales from "../../Assets/aftersales.jpeg";

const Services = () => {
  return (
    <div className="services_pg">
      <div className="services_hero">
        <div className="hero_overlay_services_pg">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="services_content_container">
        <h1>Services</h1>
        <div className="services_card_container">
          <div className="services_card">
            <img src={manufacturer} alt="" srcset="" />
            <h3>Manufacturer</h3>
          </div>
          <div className="services_card">
            <img src={shipment} alt="" srcset="" />
            <h3>Authorized Dealer</h3>
          </div>
          <div className="services_card">
            <img src={sales} alt="" srcset="" />
            <h3>Sales Representative</h3>
          </div>
          <div className="services_card">
            <img src={strategic} alt="" srcset="" />
            <h3>Strategic Partner</h3>
          </div>
          <div className="services_card">
            <img src={epc} alt="" srcset="" />
            <h3>EPC</h3>
          </div>
          <div className="services_card">
            <img src={aftersales} alt="" srcset="" />
            <h3>After Sales</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
