import React from "react";
import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { _id, brand_logo, brand_name, coupons, category } = brand;
  return (
    <div className="card card-compact bg-base-100 border-2 p-4">
      <figure className="w-[333px] h-48 ">
        <img
          className="w-full h-full rounded-2xl object-fill"
          src={brand_logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{brand_name}</h2>
        <p className="text-xl font-bold">Total Coupons: {coupons.length}</p>
        <p className="text-lg font-semibold">Category: {category}</p>
        <div className="card-actions justify-end">
          <Link to={`/brand/${_id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
