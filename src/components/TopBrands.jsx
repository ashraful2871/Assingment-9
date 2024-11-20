import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = ({ brandData }) => {
  return (
    <div className="flex items-center gap-5 bg-[#F3F3F3] pb-5 rounded-lg">
      <p className=" bg-neutral font-bold text-xl text-white px-6 py-2 rounded-lg ml-6">
        Top Brands
      </p>
      <Marquee pauseOnHover={true} speed={40}>
        {brandData.map((brand, idx) => (
          <Link className="ml-40" key={idx} to={`/brand/${brand._id}`}>
            {" "}
            <img
              className="w-24 h-24 mx-auto rounded-full"
              src={brand.brand_logo}
              alt=""
            />{" "}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrands;
