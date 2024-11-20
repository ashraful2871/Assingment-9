import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const BrandsCard = ({ brand }) => {
  const { _id, brand_logo, brand_name, coupons, category } = brand;
  return (
    <div className="card card-compact bg-base-100 border-4 md:border-2 p-4 animate__animated animate__zoomIn">
      <figure className=" ">
        <img className="h-40 w-40 rounded-full " src={brand_logo} alt="Shoes" />
      </figure>
      <div className="card-body items-center space-y-2">
        <h2 className="card-title text-3xl font-bold">{brand_name}</h2>
        <p className="text-xl font-bold ">Total Coupons: {coupons.length}</p>
        <p className="text-lg font-semibold">Category: {category}</p>
        <div className="card-actions justify-start">
          <Link
            to={`/brand/${_id}`}
            className="btn btn-neutral font-bold text-white"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
