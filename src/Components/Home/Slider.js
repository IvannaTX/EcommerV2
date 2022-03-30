import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
const Slider = () => {
  return (
    <div>
      <Carousel className="main-slide">
        <div>
          <div className="img-1" alt="yoga1" />
        </div>
        <div>
          <div className="img-2" alt="yoga2" />
        </div>
        <div>
          <div className="img-3" alt="yoga3" />
        </div>
      </Carousel>
    </div>
  );
};
export default Slider;
