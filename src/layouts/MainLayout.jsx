import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Toaster></Toaster>
      <div className="container mx-auto py-6">
        <Navbar></Navbar>
        <div className="min-h-[440px] container mx-auto py-6 px-2 md:px-2 lg:px-0">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
