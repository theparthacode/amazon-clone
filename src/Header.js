import React from "react";
import logo from "./amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="app_header">
      <a href="#" className="logo">
        <img src={logo} />
      </a>
      <a href="#" className="delivery_location">
        <p>
          Deliver to
          <strong className="location">
            <LocationOnIcon />
            India
          </strong>
        </p>
      </a>
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
      <a href="#" className="auth_sec">
        <p>
          Hello, Sign in <strong>Account & Lists</strong>
        </p>
      </a>
      <a href="#" className="order_sec">
        <p>
          Returns <strong>& Orders</strong>
        </p>
      </a>
      <a href="#" className="cart">
        <span className="count">
          <ShoppingCartIcon />
        </span>
        <p>
          <strong>Cart</strong>
        </p>
      </a>
    </div>
  );
}

export default Header;
