import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import "../style/userStyle.css";
import "../style/container.css";
import "../style/navbarStyle.css";
import Logo from "../assets/webexplainerLogo.svg";
import { FaBars, FaCross } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  const navBar = useRef(null);
  const [width, setWidth] = useState(0);
  const [mobIcon, setMobIcon] = useState(true);

  // ! Change Icon
  const changeIcon = (e) => {
    e.preventDefault();
    setMobIcon(!mobIcon);
  };

  console.log(mobIcon);
  useEffect(() => {
    const height = navBar.current.getBoundingClientRect().height;
    console.log(height);
  }, []);
  useEffect(() => {
    const calcSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", calcSize);

    return () => {
      window.removeEventListener("resize", calcSize);
    };
  }, [width]);

  return (
    <div className="main_nav" ref={navBar}>
      {/* <h2>{width}px</h2> */}
      <div
        className="nav_container  container"
        style={{ paddingBlock: "unset" }}
      >
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        {width <= 610 ? (
          <div className="mobile_link">
            <button className="mobile_btn">
              <li onClick={changeIcon} className="mobIcon">
                {mobIcon ? <FaBars /> : <GiCrossedBones />}
              </li>
            </button>
          </div>
        ) : (
          <>
            <nav className="mobile_nav">
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
            <nav className="desktop_nav">
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
          </>
        )}

        {/* <div className="mobile_link">
          <button className="mobile_btn">
            <i className="fas fa-bars"></i>
          </button>
        </div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
