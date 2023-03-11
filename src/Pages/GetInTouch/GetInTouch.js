import React, { useState } from "react";
import "./getInTouch.css";
import img from "../../Assets/sales.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Loader from "../../Components/Loader/Loader";

const GetInTouch = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
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
          setLoading(false);
          setDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
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
    setLoading(true);
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
    <div className="getInTouch-pg">
      <div className="hero_contact_pg">
        <div className="hero_overlay_contact_pg">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div id="getInTouch_container" style={{ display: "flex" }}>
        <div className="contact_content_container">
          <h1>Get in Touch</h1>
          <div className="contact_content_container_form">
            <div className="form_container">
              <input
                type="text"
                name=""
                id="firstName"
                onChange={handleChange}
                value={details.firstName}
                placeholder="First Name"
              />
              <input
                type="text"
                name=""
                id="lastName"
                onChange={handleChange}
                value={details.lastName}
                placeholder="Last Name"
              />
            </div>
            <div className="form_container">
              <input
                type="text"
                name=""
                id="email"
                onChange={handleChange}
                value={details.email}
                placeholder="Email Address"
              />
              <input
                type="text"
                name=""
                id="phone"
                onChange={handleChange}
                value={details.phone}
                placeholder="Phone no."
              />
            </div>
            <textarea
              name=""
              id="message"
              onChange={handleChange}
              value={details.message}
              cols="70"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button onClick={handleSubmit}>
              {loading ? <Loader small /> : "Send"}
            </button>
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
