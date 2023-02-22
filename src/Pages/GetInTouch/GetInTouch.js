import React from "react";
import "./getInTouch.css";
import img from "../../Assets/sales.jpeg";

const GetInTouch = () => {
  return (
    <div className="getInTouch-pg">
      <div className="hero_contact_pg">
        <div className="hero_overlay_contact_pg">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="contact_content_container">
          <h1>Get in Touch</h1>
          <div className="contact_content_container_form">
            <div className="form_container">
              <input type="text" name="" id="" placeholder="First Name" />
              <input type="text" name="" id="" placeholder="Last Name" />
            </div>
            <div className="form_container">
              <input type="text" name="" id="" placeholder="Email Address" />
              <input type="text" name="" id="" placeholder="Phone no." />
            </div>
            <textarea
              name=""
              id="message"
              cols="70"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
        <div className="contact_img_container">
          <img src={img} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
