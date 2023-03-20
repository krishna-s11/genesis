import React from "react";
import LeftPane from "../../../Components/AdminPanel/LeftPane/LeftPane";
import RightPane from "../../../Components/AdminPanel/RightPane/RightPane";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LeftPane />
      <RightPane />
    </div>
  );
};

export default Dashboard;
