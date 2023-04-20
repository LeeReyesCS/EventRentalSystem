import React from "react";
import "../styles/Hero.css";
import HomePagePic from "../images/Gabby_Homepage_Pic.jpg";
import HeroPic from "../images/Hero_Pic.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-img">
        <img className="Homepagepic" src={HomePagePic} alt="" />
        <img className="HeroPic" src={HeroPic} alt="" />
      </div>
      <div className="hero-text">
        <h1>Life is a party, let me help you make it unforgettable!</h1>
        <button className="btn-book-now">Book Now</button>
      </div>
    </div>
  );
};

export default Hero;
