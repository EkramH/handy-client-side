import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import auth from "../firebase.init";
const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      { user &&
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      }
    </>
  );

  return (
    <div>
      <div className="navbar bg-neutral p-0 md:px-10 lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary hover:text-white"
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-fill sm:w-3/4 md:w-3/4 lg:w-3/4"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-primary font-bold">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">

          {user ? (
            <div className="flex items-center">
              <p className="text-secondary font-semibold p-1 md:px-2 lg:px-3">{user.displayName}</p>
              <button className="btn btn-primary text-white" onClick={logout}>
                Sign out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default navbar;
