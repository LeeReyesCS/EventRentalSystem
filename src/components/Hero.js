import React from "react";
import "../styles/Hero.css";
import GabbysBannerPic from "../images/GabbysBannerPic.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="bannerPic">
        <img
          style={{
            objectFit: "cover",
            imageRendering: "auto",
            maxWidth: "100%",
            width: "100vw",
            height: "300px",
          }}
          src={GabbysBannerPic}
          alt=""
        />
      </div>
      <div className="hero-text">
        <h1 style={{ color: "purple" }}>
          {" "}
          Life is a party, let me help you make it unforgettable!
        </h1>
        <button className="btn-book-now">Book Now</button>
      </div>
    </div>
  );
};

export default Hero;
