import React from "react";
import "./loading.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import logo from "../../Assets/logo.png";
import internet from "../../Assets/Internet.gif";

const Loading = () => {
  return (
    <div className="loading">
      {/* <img src={logo} alt="" srcset="" /> */}
      {/* <BounceLoader color= '#36D7B7' size={100} /> */}
      {/* <PropagateLoader color="#f1d358" size={10} speedMultiplier={0.8} /> */}
      <img src={internet} alt="" srcset="" />
      {/* <SyncLoader color="#f1d358" size={10} /> */}
      {/* <RiseLoader
            color="#36d7b7"
            size={10}
            speedMultiplier={0.8}
          /> */}
      {/* <BarLoader
            color="#f1d358"
            width={150}
          /> */}
    </div>
  );
};

export default Loading;
