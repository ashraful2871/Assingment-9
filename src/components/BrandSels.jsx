import React from "react";
import BrandsCard from "./BrandsCard";

const BrandSells = ({ brandData }) => {
  //   console.log(brandData);
  const brands = brandData.filter((brand) => brand.isSaleOn);
  console.log(brands);
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold mb-5">
        Brands on Sell
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {brands.map((brand, idx) => (
          <BrandsCard brand={brand} key={idx}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default BrandSells;
