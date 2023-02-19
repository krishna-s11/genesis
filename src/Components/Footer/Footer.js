import React from "react";
import "./footer.css";
import map from "../../Assets/map.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_map_holder">
        <img src={map} alt="" srcset="" />
      </div>
      <div className="footer_getintouch">
        <h1>Get In Touch With Us</h1>
        <div className="footer_form">
          <div className="form_rw">
            <input
              type="text"
              name="first name"
              id="first_name"
              placeholder="First Name"
            />
            <input
              type="text"
              name="last name"
              id="last_name"
              placeholder="Second Name"
            />
          </div>
          <div className="form_rw">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Addrress"
            />
            <input
              type="tel"
              name="phone number"
              id="phone_number"
              placeholder="Phone No."
            />
          </div>
          <textarea
            name="message"
            id=""
            cols="69"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="footer_btn_send">Send</button>
      </div>
    </div>
  );
};

export default Footer;
