import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const SignUp = () => {
  const { signUp, setUser, updateUserProfile, signInGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.PhotoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasMinLength = /.{6,}/;

    // check length
    if (!hasMinLength.test(password)) {
      setError("password must be 6 character or longer");
      return;
    }
    //check has uppercase
    if (!hasUppercase.test(password)) {
      setError("must be one uppercase letter");
      return;
    }

    // check has lowercase
    if (!hasLowercase.test(password)) {
      setError("must be one lowercase letter");
      return;
    }

    //sign up
    signUp(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then(() => {
            toast.success("Successfully Signed Up", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // google login
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully Signed Up", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center text-4xl font-bold mt-6">Sign Up Now</h2>
        <form onSubmit={handleSignUpSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              name="PhotoURL"
              placeholder="PhotoURl"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-2 top-12 text-lg"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <p className="text-center mt-2 text-red-600">{error}</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <div className="divider mt-0">or</div>
        <div className="flex justify-center mb-4">
          <button onClick={handleGoogleLogin} className="text-3xl">
            <FcGoogle />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-center">
            Already Have An Account ? {""}
            <Link className="text-[#F8605D]" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
