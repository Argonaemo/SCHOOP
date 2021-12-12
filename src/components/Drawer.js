import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Drawer = () => {
  const [locationNow, setLocationNow] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        const itemStr = localStorage.getItem("adminToken");
        if (!itemStr) {
          console.log("already over");
        } else {
          localStorage.removeItem("adminToken");
        }
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const setNow = () => {
      setLocationNow(location.pathname);
    };
    setNow();
  }, []);
  return (
    <div className="drawer">
      <h1 className="drawer-title">SCHOOP</h1>

      <div className="drawer-sub">
        <div className="drawer-sub-title">
          <Icon icon="ph:circles-four-bold" width="30" />
          <h4>Dashboard</h4>
        </div>
        <Link
          to="/dashboard"
          className={locationNow === "/dashboard" ? "drawerActive" : null}
        >
          Statistic
        </Link>
      </div>

      <div className="drawer-sub">
        <div className="drawer-sub-title">
          <Icon icon="codicon:book" width="30" />
          <h4>Book</h4>
        </div>
        <Link
          to="/bookoview"
          className={
            locationNow === "/bookoview" ? "drawerActive cobaTransisi" : null
          }
        >
          Overview
        </Link>
        <Link
          to="/bookadd"
          className={locationNow === "/bookadd" ? "drawerActive" : null}
        >
          Add Book
        </Link>
      </div>

      <div className="drawer-sub">
        <div className="drawer-sub-title">
          <Icon icon="bx:bx-book-reader" width="30" />
          <h4>E-Book</h4>
        </div>
        <Link
          to="/ebookoview"
          className={locationNow === "/ebookoview" ? "drawerActive" : null}
        >
          Overview
        </Link>
        <Link
          to="/ebookadd"
          className={locationNow === "/ebookadd" ? "drawerActive" : null}
        >
          Add E-Book
        </Link>
      </div>

      <div className="drawer-sub">
        <div className="drawer-sub-title">
          <Icon icon="akar-icons:money" height="30" />
          <h4>Payment</h4>
        </div>
        <Link
          to="/sppoview"
          className={locationNow === "/sppoview" ? "drawerActive" : null}
        >
          SPP
        </Link>
        <Link
          to="/uniformoview"
          className={locationNow === "/uniformoview" ? "drawerActive" : null}
        >
          Uniform
        </Link>
      </div>

      <div className="drawer-sub">
        <div className="drawer-sub-title">
          <Icon icon="fluent:food-pizza-24-regular" width="30" />
          <h4>Food</h4>
        </div>
        <Link
          to="/foodoview"
          className={locationNow === "/foodoview" ? "drawerActive" : null}
        >
          Overview
        </Link>
      </div>

      <div className="drawer-sub">
        <div className="drawer-sub-title">
          <Icon icon="octicon:tools-16" width="30" />
          <h4>Services</h4>
        </div>
        <Link
          to="/serviceoview"
          className={locationNow === "/serviceoview" ? "drawerActive" : null}
        >
          Overview
        </Link>
      </div>

      <div className="drawer-sub">
        <div className="drawer-sub-title">
          <Icon icon="ant-design:shopping-cart-outlined" width="30" />
          <h4>Item</h4>
        </div>
        <Link
          to="/itemoview"
          className={locationNow === "/itemoview" ? "drawerActive" : null}
        >
          Overview
        </Link>
      </div>

      <button className="drawer-btn" onClick={signOutHandler}>
        LOGOUT
      </button>
    </div>
  );
};

export default Drawer;
