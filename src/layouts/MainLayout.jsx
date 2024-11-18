import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container mx-auto py-6 ">
      <Navbar></Navbar>
      <div className="container mx-auto py-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
