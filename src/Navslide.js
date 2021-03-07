import React, { useState, useCallback } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function Navslide() {
  const [slideclass, setslideclass] = useState(false);
  const toggle = useCallback(() => {
    setslideclass(!slideclass);
  }, [slideclass, setslideclass]);

  const removeClass = () => {
    setslideclass(false);
  };

  return (
    <>
      <div
        className={slideclass ? "breadcrumb active" : "breadcrumb"}
        onClick={toggle}
      >
        <MenuIcon /> All
      </div>
      <div className="slide_menu">
        <span className="close" onClick={removeClass}></span>
        <div className="navtitle">
          <div className="avatar">
            <AccountCircleIcon />
          </div>
          <h3>Hello, Sign in</h3>
        </div>
        <div className="links">
          <h3>Digital Content & Devices</h3>
          <ul className="navigation">
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
          </ul>
          <h3>Digital Content & Devices</h3>
          <ul className="navigation">
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
          </ul>
          <h3>Digital Content & Devices</h3>
          <ul className="navigation">
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
          </ul>
          <h3>Digital Content & Devices</h3>
          <ul className="navigation">
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
            <li>
              <Link to="#">Digital Content & Devices</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navslide;
