import React from "react";
import BrandsCard from "./BrandsCard";

const BrandSells = ({ brandData }) => {
  const brands = brandData.filter((brand) => brand.isSaleOn);

  return (
    <div>
      <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-5">
        Brands on Sell
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {brands.map((brand, idx) => (
          <BrandsCard brand={brand} key={idx}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default BrandSells;
