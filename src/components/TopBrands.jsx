import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {
  return (
    <div className="flex items-center gap-5 bg-[#F3F3F3] p-3 rounded-sm">
      <p className="bg-[#D72050] text-white px-6 py-2 rounded-sm">Latest</p>
      <Marquee pauseOnHover={true} speed={40}>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
      </Marquee>
    </div>
  );
};

export default TopBrands;
