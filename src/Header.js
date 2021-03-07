import React from "react";
import logo from "./amazon-logo.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <>
      <div className="app_header">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <Link to="/" className="delivery_location">
          <p>
            Deliver to
            <strong className="location">
              <LocationOnIcon />
              India
            </strong>
          </p>
        </Link>
        <div className="search_box">
          <form>
            <div className="input">
              <input type="search" />
            </div>
            <div className="search">
              <button>
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
        <Link to="/account" className="auth_sec">
          <p>
            Hello, Sign in <strong>Account & Lists</strong>
          </p>
        </Link>
        <Link to="/order" className="order_sec">
          <p>
            Returns <strong>& Orders</strong>
          </p>
        </Link>
        <Link to="/cart" className="cart">
          <span className="count">
            <ShoppingCartIcon />
            <strong className="num">0</strong>
          </span>
          <p>
            <strong>Cart</strong>
          </p>
        </Link>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
