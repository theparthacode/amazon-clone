import React from "react";
import { Link } from "react-router-dom";
import Navslide from "./Navslide";

function Navbar() {
  return (
    <>
      <nav>
        <Navslide />
        <ul className="nav">
          <li>
            <Link to="/">Today's Deals</Link>
          </li>
          <li>
            <Link to="/">Buy Again</Link>
          </li>
          <li>
            <Link to="/">Amazon.com</Link>
          </li>
          <li>
            <Link to="/">Customer Service</Link>
          </li>
          <li>
            <Link to="/">Browsing History</Link>
          </li>
          <li>
            <Link to="/">Gift Cards</Link>
          </li>
          <li>
            <Link to="/">Sell</Link>
          </li>
          <li>
            <Link to="/">Registry</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
