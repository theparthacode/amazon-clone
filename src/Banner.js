import React, { Component } from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://react-slideshow.herokuapp.com/assets/images/slide_5.jpg",
  "https://react-slideshow.herokuapp.com/assets/images/slide_3.jpg",
  "https://react-slideshow.herokuapp.com/assets/images/slide_4.jpg",
];

const Slideshow = () => {
  return (
    <>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Slideshow;
