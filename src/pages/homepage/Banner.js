import React from "react";
import {Link} from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
];

function Banner() {
  return (
    <div className="section slide-container">
      <Slide>
        <Link to='/' className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </Link>
        <Link to='/' className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </Link>
        <Link to='/' className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </Link>
      </Slide>
    </div>
  );
}

export default Banner;
