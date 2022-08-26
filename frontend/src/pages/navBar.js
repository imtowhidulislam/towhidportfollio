import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/navbarStyle.css";

const Navbar = () => {
  return (
    <div className="main_nav ">
      <div className="nav_container  area_definer">
        <h2 className="logo">Towhid</h2>
        <nav>
          <ul className="nav_links">
            <li className="nav_list">
              <Link className="link" to="/">
                signup
              </Link>
            </li>
            <li className="nav_list">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            {/*             <li className="nav_list">
              <Link className="link" to="/signup">
                Sign up
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className="mobile_link">
          <button className="mobile_btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
