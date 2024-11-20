import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {
  const brandsData = useLoaderData();
  const [searchBrands, setSearchBrands] = useState("");

  const searchByBrands = brandsData.filter((brand) => {
    return brand.brand_name.toLowerCase().includes(searchBrands.toLowerCase());
  });
  return (
    <div>
      <h2 className="text-center text-2xl md:text-4xl font-extrabold my-5">
        Explore The Top E-Commerce Brands in Bangladesh
      </h2>

      <div className="flex justify-center mt-14">
        <input
          type="text"
          placeholder="Search Brands..."
          className="input border-2 input-bordered w-full max-w-xs"
          value={searchBrands}
          onChange={(e) => setSearchBrands(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 animate__animated animate__zoomIn">
        {searchByBrands.map((brand, idx) => (
          <div
            key={idx}
            className="card items-center card-side bg-base-100 shadow-xl p-5 hover:scale-105 transition-transform duration-200 border-2"
          >
            <div className="flex flex-col items-center md:pl-8">
              <figure>
                <img
                  className="w-20 h-20 rounded-full"
                  src={brand.brand_logo}
                  alt="Movie"
                />
              </figure>
              <h2 className="text-center text-xl font-bold mt-1">
                {brand.brand_name}
              </h2>
              <div className="text-yellow-500 text-lg mt-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>{" "}
              <span> ({brand.rating})</span>
            </div>

            <div className="card-body items-center space-y-3 md:pl-32">
              <h2 className="card-title text-3xl font-bold">
                {brand.brand_name}
              </h2>
              <p>{brand.description}</p>
              <div className="card-actions items-center gap-8 md:gap-4 flex-col md:flex-row">
                <Link
                  to={`/brands-details/${brand._id}`}
                  className="btn btn-neutral font-bold text-white text-lg"
                >
                  View Coupons
                </Link>
                {brand.isSaleOn && (
                  <span className=" text-2xl font-bold text-red-600 animate-bounce">
                    Sale Is On
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {searchByBrands.length === 0 && (
          <div className="flex justify-center flex-col col-span-3 items-center min-h-[660px] bg-white rounded-3xl shadow-2xl">
            <div className="mb-10">
              <img src="https://i.ibb.co.com/zZVxvQh/error.webp" alt="" />
            </div>
            <p className="text-4xl font-bold">No Brand Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
