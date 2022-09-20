import "./index.css";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Logo extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="logo-container">
        <h2> Clients </h2>
        <p className="service-info">
          Lorem lpsum is simply dummy text of the parinting and typesettig
          industry. Lorem Ipsum has been the industry's standard dummy te ever
          since the 1500s.
        </p>
        <Slider {...settings}>
          <div className="logo-size">
            <img
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1663652313/about%20assignment/image001_ci84yl.png"
              alt="logo"
              className="company-logo"
            />
          </div>
          <div className="logo-size">
            <img
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1663652313/about%20assignment/image001_ci84yl.png"
              alt="logo"
              className="company-logo"
            />
          </div>
          <div className="logo-size">
            <img
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1663652313/about%20assignment/image001_ci84yl.png"
              alt="logo"
              className="company-logo"
            />
          </div>
          <div className="logo-size">
            <img
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1663652313/about%20assignment/image001_ci84yl.png"
              alt="logo"
              className="company-logo"
            />
          </div>
          <div className="logo-size">
            <img
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1663652313/about%20assignment/image001_ci84yl.png"
              alt="logo"
              className="company-logo"
            />
          </div>
          <div className="logo-size">
            <img
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1663652313/about%20assignment/image001_ci84yl.png"
              alt="logo"
              className="company-logo"
            />
          </div>
          <div className="logo-size">
            <img
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1663652313/about%20assignment/image001_ci84yl.png"
              alt="logo"
              className="company-logo"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Logo;
