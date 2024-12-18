import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loginUser, signInGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    // login
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully login", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid Email & Password", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  // google login
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully login", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coupon Collect - Login</title>
      </Helmet>

      <div className="flex justify-center mt-28">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-center text-4xl font-bold mt-6">Login</h2>
          <form onSubmit={handleLogin} className="card-body">
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
                onChange={(e) => setEmail(e.target.value)}
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
              <label className="label">
                <Link
                  state={{ email }}
                  to="/forget-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-2 top-12 text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral font-bold text-white text-lg">
                Login
              </button>
            </div>
          </form>
          <div className="divider mt-0">or</div>
          <div className="flex justify-center mb-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="text-3xl"
            >
              <FcGoogle />
            </button>
          </div>

          <div className="mb-4">
            <p className="text-center">
              Do not Have An Account ? {""}
              <Link className="text-[#F8605D]" to="/sign-up">
                Sign UP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
