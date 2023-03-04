import React, { useState } from "react";
import "./footer.css";
import map from "../../Assets/map.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const notify = () =>
    toast("Message sent", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  function sendEmail(e, templateParams) {
    e.preventDefault();
    emailjs
      .send(
        "service_r0xm9po",
        "template_452kc0k",
        templateParams,
        "DSjPMcnO4M6XbgW6k"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = details.firstName + " " + details.lastName;
    var templateParams = {
      name: name,
      message: details.message,
      phone: details.phone,
      email: details.email,
    };
    sendEmail(e, templateParams);
  };

  return (
    <div className="footer">
      <ToastContainer />
      <div className="footer_map_holder">
        <a
          href="https://goo.gl/maps/JscZbY6DTGf9c6w96"
          target="_blank"
          rel="noreferrer"
        >
          <img src={map} alt="" srcset="" />
        </a>
      </div>
      <div className="footer_getintouch">
        <h1>Get In Touch With Us</h1>
        <div className="footer_form">
          <div className="form_rw">
            <input
              type="text"
              name="first name"
              id="firstName"
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="last name"
              id="lastName"
              onChange={handleChange}
              placeholder="Second Name"
            />
          </div>
          <div className="form_rw">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email Addrress"
            />
            <input
              type="tel"
              name="phone number"
              id="phone"
              onChange={handleChange}
              placeholder="Phone No."
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="69"
            onChange={handleChange}
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="footer_btn_send" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Footer;
