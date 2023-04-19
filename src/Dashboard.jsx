import React from "react";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen  rounded-md ">
      <Sidebar />
      <MainPage />
    </div>
  );
};

export default Dashboard;
