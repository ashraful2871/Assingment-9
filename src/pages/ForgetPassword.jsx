import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { forgetPassword, signOutUser } = useContext(AuthContext);
  const { state } = useLocation();
  const [email, SetEmail] = useState(state?.email);
  const navigate = useNavigate();

  // forget password
  const handleResetPassword = (e) => {
    e.preventDefault();
    forgetPassword(email)
      .then(() => {
        navigate("/login");
        window.open(
          "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
          "_blank"
        );
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Failed to send reset mail");
      });
  };

  return (
    <div className="flex justify-center mt-32">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleResetPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              value={state?.email}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral font-bold text-white text-lg">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
