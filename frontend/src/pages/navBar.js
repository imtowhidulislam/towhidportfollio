import { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/userStyle.css";
import "../style/container.css";

const Navbar = () => {
  const navBar = useRef(null);
  useEffect(() => {
    const height = navBar.current.getBoundingClientRect().height;
    console.log(height);
  }, []);

  return (
    <div className="main_nav" ref={navBar}>
      <div
        className="nav_container  container"
        style={{ paddingBlock: "unset" }}
      >
        <h2 className="logo">Towhid</h2>
        <nav>
          <ul className="nav_links">
            <li className="nav_list">
              <Link className="link" to="/">
                Homepage
              </Link>
            </li>
            {/* <li className="nav_list">
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li> */}
            <li className="nav_list">
              <Link className="link" to="/signup">
                signup
              </Link>
            </li>
            <li className="nav_list">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
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
