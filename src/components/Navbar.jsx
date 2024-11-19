import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/brands">Brands</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about-dev">About Dev</NavLink>
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
            <h2 className="font-bold text-3xl">Collect Coupon </h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end items-center gap-5">
        <div className="">
          {user?.email && (
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
          )}
        </div>

        <div>
          {user ? (
            <button
              onClick={signOutUser}
              className="btn btn-neutral font-bold text-white text-lg"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-neutral font-bold text-white text-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
