import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { userEmail, forgetPassword, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // forget password
  const handleResetPassword = (e) => {
    e.preventDefault();
    forgetPassword(userEmail)
      .then(() => {
        toast.success("Reset mail sent your mail please check");
        signOutUser();
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

  console.log(userEmail);
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
              value={userEmail}
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
