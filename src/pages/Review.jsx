import React from "react";
import { Helmet } from "react-helmet";

const Review = () => {
  const handleReload = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Helmet>
        <title>Collect Coupon - Review</title>
      </Helmet>
      <div className="bg-black min-h-56 rounded-xl">
        <div className=" text-center">
          <div className="pt-8 ">
            <h1 className="text-3xl font-extrabold text-white">
              Leave some comment
            </h1>
            <p className="py-6 font-semibold text-white/75">
              We value your review and are always striving to improve. Share
              your any thoughts like negative or positive, suggestions, or
              <br />
              experiences with us, so we can continue to provide the best
              service possible.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6] p-4 md:p-16">
        <h2 className="text-center mt-5 md:mt-0 mb-8 text-3xl md:text-4xl font-extrabold">
          Write Comment Here :
        </h2>
        <div className="card bg-base-100 w-full shrink-0 shadow-xl container mx-auto">
          <form onSubmit={handleReload} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Name"
                placeholder="Your Name"
                className="input input-bordered bg-[#F6F6F6]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered bg-[#F6F6F6]"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label ">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Your Number "
                className="input input-bordered bg-[#F6F6F6]"
                required
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Write Your Comment</span>
              </label>
              <textarea
                className="textarea h-32 bg-[#F6F6F6]"
                placeholder="Write Comment...."
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral font-bold text-white text-lg rounded-full">
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
