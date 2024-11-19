import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-5 flex justify-center ">
      <div className="card bg-base-100 shadow-xl border-2 p-4">
        <figure>
          <img
            className="w-36 h-36 border-4 border-neutral rounded-full object-cover"
            src={user?.photoURL}
            alt="Movie"
          />
        </figure>
        <div className="card-body items-center space-y-5">
          <h2 className="card-title font-bold">{user?.displayName}</h2>
          <p className="font-semibold">Email: {user?.email}</p>
          <div className="card-actions">
            <button className="btn btn-neutral font-bold text-white text-lg">
              Update{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
