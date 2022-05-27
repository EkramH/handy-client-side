import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashborad = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

    return (
        <div>
            <div className="drawer drawer-mobile p-0 lg:px-20">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex items-center justify-around">
            <h2 className="text-5xl text-primary p-5">Dashboard</h2>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-secondary drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
            <Outlet/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 lg:w-64 bg-base-200 text-base-content h-full lg:h-3/4 my-auto rounded-md">

            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {
              admin ?
              <>
                <li>
                  <Link to="/dashboard/alluser">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/additem">Add Item</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageitem">Manage Item</Link>
                </li>
              </>
              :
              <>
                <li>
                  <Link to="/dashboard/orders">My Orders</Link>
                </li>
                <li>
                  <Link hidden to="/dashboard/review">My Reviews</Link>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Dashborad;