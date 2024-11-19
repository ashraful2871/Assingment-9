import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {
  const brandsData = useLoaderData();
  console.log(brandsData);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-5">
        Explore The Top E-Commerce Brands in Bangladesh
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        {brandsData.map((brand, idx) => (
          <div
            key={idx}
            className="card items-center card-side bg-base-100 shadow-xl p-5 hover:scale-105 transition-transform duration-200 border-2"
          >
            <div className="flex flex-col items-center md:pl-8">
              <figure className="w-20 h-20">
                <img
                  className=" rounded-full"
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
              <div className="card-actions">
                <Link
                  to={`/brands-details/${brand._id}`}
                  className="btn btn-primary"
                >
                  View Coupons
                </Link>
                {brand.isSaleOn && (
                  <p className="ml-1 text-2xl font-bold text-red-600 animate-bounce">
                    Sale Is On
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;