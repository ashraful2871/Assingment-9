import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const photoURL = e.target.PhotoURL.value;
    const name = e.target.name.value;

    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Successfully Updated Profile", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/my-profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coupon Collect - Update Profile</title>
      </Helmet>
      <div className="flex justify-center mt-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateProfile} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                name="PhotoURL"
                placeholder="PhotoURl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral font-bold text-white text-lg">
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
