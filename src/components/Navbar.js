import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../All.css";
const Navbar = () => {
    const location = useLocation();
    const [pathNow, setPathNow] = useState('')

  useEffect(() => {
      setPathNow(location.pathname)
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-logo"></div>
      <div className="navbar-item">
        <ul>
          <li>
            <Link to="/" className={pathNow==="/"? "activePath": null}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className={pathNow==="/about"? "activePath": null}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className={pathNow==="/contact"? "activePath": null}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/faq" className={pathNow==="/faq"? "activePath": null}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <button className="navbar-btn">UNDUH SEKARANG</button>
    </div>
  );
};

export default Navbar;
