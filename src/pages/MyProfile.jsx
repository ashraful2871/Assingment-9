import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/update-profile");
  };

  return (
    <div className="mt-10 flex flex-col items-center space-y-5">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold md:mb-8">
        "Hi there! Great to see you here"
      </h2>
      <div className="card bg-base-100 w-96 md:w-[500px] shadow-xl border-2 p-2 relative">
        <figure
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/yRHHcMg/black-friday-sale-up-50-off-red-black-price-tags-sales-tags-166207-356.jpg)",
          }}
          className=" p-9 rounded-xl h-72 "
        >
          <div className="absolute bottom-44 left-3 md:bottom-36 md:left-2 ">
            <img
              className="w-24 h-24 md:w-36 md:h-36 border-4 border-neutral rounded-full object-cover"
              src={user?.photoURL}
              alt="Movie"
            />
          </div>
        </figure>
        <div className="card-body items-center space-y-5">
          <h2 className="card-title font-bold">{user?.displayName}</h2>
          <p className="font-semibold">Email: {user?.email}</p>
          <div className="card-actions">
            <button
              onClick={handleNavigate}
              className="btn btn-neutral font-bold text-white text-lg"
            >
              Update{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
