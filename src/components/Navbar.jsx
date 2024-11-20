import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { IoHomeOutline } from "react-icons/io5";
import { TbArrowRoundaboutLeft, TbBrandStackshare } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // sign out
  const handleSignOut = () => {
    signOutUser();
    toast.success("Successfully Sign Out", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const links = (
    <>
      <li>
        <NavLink className=" font-bold" to="/">
          <span className="text-base">
            <IoHomeOutline />
          </span>{" "}
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className=" font-bold" to="/brands">
          <span className="text-base">
            <TbBrandStackshare />
          </span>{" "}
          Brands
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className=" font-bold" to="/my-profile">
            <span className="text-base">
              <CgProfile />
            </span>{" "}
            My Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink className=" font-bold" to="/about-dev">
          <span className="text-base">
            <TbArrowRoundaboutLeft />
          </span>{" "}
          About Dev
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <div>
            <img
              className="w-12"
              src="https://i.ibb.co.com/4VWpSyw/Free.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-extrabold text-xl md:text-3xl">
              Collect Coupon{" "}
            </h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end items-center gap-5">
        {user && (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Hi.</h2>
            <p className="font-semibold">
              <small>{user?.displayName}</small>
            </p>
          </div>
        )}
        <div className="">
          {user?.email && (
            <div className="hidden md:block">
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full w-8 h-8"
                  src={user.photoURL}
                  alt=""
                />
                <p>
                  <small>{user?.email}</small>
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-neutral font-bold text-white text-lg"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-neutral font-bold text-white text-lg"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="btn btn-neutral font-bold text-white text-lg ml-2"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
