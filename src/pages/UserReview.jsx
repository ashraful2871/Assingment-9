import React from "react";
import { useLoaderData } from "react-router-dom";

const UserReview = () => {
  const userData = useLoaderData();
  console.log(userData);
  return (
    <>
      <h2 className="text-center font-extrabold text-4xl my-10">User Review</h2>{" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {userData.map((user, idx) => (
          <div
            key={idx}
            className="card items-center card-side bg-base-100 shadow-xl p-5 hover:scale-105 transition-transform duration-200 border-2"
          >
            <div className="flex flex-col items-center md:pl-8">
              <figure>
                <img
                  className="w-20 h-20 rounded-full"
                  src={user.image}
                  alt="user"
                />
              </figure>
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
              <span> ({user.rating})</span>
            </div>

            <div className="card-body text-center items-center space-y-3">
              <h2 className="card-title text-2xl font-bold">{user.name}</h2>
              <p>{user.comment}</p>
              {/* <div className="card-actions items-center gap-8 md:gap-4 flex-col md:flex-row">
           <Link
             to={`/brand/${brand._id}`}
             className="btn btn-neutral font-bold text-white text-lg"
           >
             View Coupons
           </Link>
           {brand.isSaleOn && (
             <span className=" text-2xl font-bold text-red-600 animate-bounce">
               Sale Is On
             </span>
           )}
         </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserReview;
