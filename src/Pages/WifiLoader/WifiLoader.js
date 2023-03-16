import React from 'react'
import './loading.css'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import BounceLoader from "react-spinners/BounceLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import SyncLoader from "react-spinners/SyncLoader";
import RiseLoader from "react-spinners/RiseLoader";
import BarLoader from "react-spinners/BarLoader";
import logo from "../../Assets/logo.png";

const Loading = () => {
    return (
        <div className='loading'>
            <img src={logo} alt="" srcset=""/>
            {/* <BounceLoader color= '#36D7B7' size={100} /> */}
            <PropagateLoader color="#f1d358" size={10} speedMultiplier={0.8}/>
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
    )
}

export default Loading