import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = ({ brandData }) => {
  return (
    <div className="flex items-center gap-5 bg-[#F3F3F3] pb-3 md:pb-5 rounded-lg border-2">
      <p className=" bg-neutral text-center mt-5 ml-2 font-bold text-sm md:text-xl text-white md:px-6 md:py-2 rounded-lg md:ml-6">
        Top Brands
      </p>
      <Marquee pauseOnHover={true} speed={40}>
        {brandData.map((brand, idx) => (
          <Link className="ml-20 md:ml-48" key={idx} to={`/brand/${brand._id}`}>
            {" "}
            <img
              className="w-12 h-12 md:w-24 md:h-24 mx-auto rounded-full"
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
