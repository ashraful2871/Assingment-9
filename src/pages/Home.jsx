import React, { useContext } from "react";
import TopBrands from "../components/TopBrands";
import BrandSells from "../components/BrandSels";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const brandData = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log(data);

  return (
    <div>
      {user && (
        <h2 className="flex justify-center ">
          <p className="text-2xl md:text-4xl font-bold mb-10 p-2 md:p-0 text-center">
            "Hay {user?.displayName} Welcome To Our Site"
          </p>
        </h2>
      )}

      <div className="md:p-3">
        <div className="carousel w-full rounded-2xl border-2 h-48 md:h-[400px] lg:h-[600px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/qs2KjYZ/72528311-9742750.jpg"
              className="w-full h-48 md:h-[395px] lg:h-[595px] "
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle btn-neutral">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-neutral">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/2MHgjtn/sell.jpg"
              className="w-full h-48 md:h-[395px] lg:h-[595px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle btn-neutral">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle btn-neutral">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/1mVGQC0/20284932-6276249.jpg  "
              className="w-full  h-48 md:h-[395px] lg:h-[595px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle btn-neutral">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle btn-neutral">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <TopBrands brandData={brandData}></TopBrands>
      </div>
      <BrandSells brandData={brandData}></BrandSells>
    </div>
  );
};

export default Home;
