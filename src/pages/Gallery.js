import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Gallery.css";

//importing Gallery Photos
import GalleryPic1 from "../images/Gallery/GalleryPic1.jpg";
import GalleryPic2 from "../images/Gallery/GalleryPic2.jpg";
import GalleryPic3 from "../images/Gallery/GalleryPic3.jpg";
import GalleryPic4 from "../images/Gallery/GalleryPic4.jpg";
import GalleryPic5 from "../images/Gallery/GalleryPic5.jpg";
import GalleryPic6 from "../images/Gallery/GalleryPic6.jpg";
import GalleryPic7 from "../images/Gallery/GalleryPic7.jpg";
import GalleryPic8 from "../images/Gallery/GalleryPic8.jpg";
import GalleryPic9 from "../images/Gallery/GalleryPic9.jpg";
import GalleryPic10 from "../images/Gallery/GalleryPic10.jpg";
import GalleryPic11 from "../images/Gallery/GalleryPic11.jpg";
import GalleryPic12 from "../images/Gallery/GalleryPic12.jpg";
import GalleryPic13 from "../images/Gallery/GalleryPic13.jpg";
import GalleryPic14 from "../images/Gallery/GalleryPic14.jpg";
import GalleryPic15 from "../images/Gallery/GalleryPic15.jpg";
import GalleryPic16 from "../images/Gallery/GalleryPic16.jpg";
import GalleryPic17 from "../images/Gallery/GalleryPic17.jpg";
import GalleryPic18 from "../images/Gallery/GalleryPic18.jpg";
import GalleryPic19 from "../images/Gallery/GalleryPic19.jpg";
import GalleryPic20 from "../images/Gallery/GalleryPic20.jpg";
import GalleryPic21 from "../images/Gallery/GalleryPic21.jpg";
import GalleryPic22 from "../images/Gallery/GalleryPic22.jpg";
import GalleryPic23 from "../images/Gallery/GalleryPic23.jpg";
import GalleryPic24 from "../images/Gallery/GalleryPic24.jpg";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-headers">Birtday Parties</p>
      <div className="gallery-container">
        {/* Birthday Party Pictures */}
        <img src={GalleryPic1} alt="" />
        <img src={GalleryPic2} alt="" />
        <img src={GalleryPic3} alt="" />
        <img src={GalleryPic4} alt="" />
        <img src={GalleryPic5} alt="" />
        <img src={GalleryPic6} alt="" />
      </div>
      <p className="gallery-headers">Baby Showers</p>
      <div className="gallery-container">
        {/* Baby Shower Pictures */}
        <img src={GalleryPic7} alt="" />
        <img src={GalleryPic8} alt="" />
        <img src={GalleryPic9} alt="" />
        <img src={GalleryPic10} alt="" />
        <img src={GalleryPic11} alt="" />
        <img src={GalleryPic12} alt="" />
      </div>
      <p className="gallery-headers">Weddings</p>
      <div className="gallery-container">
        {/* Wedding Pictures */}
        <img src={GalleryPic13} alt="" />
        <img src={GalleryPic14} alt="" />
        <img src={GalleryPic15} alt="" />
        <img src={GalleryPic16} alt="" />
        <img src={GalleryPic17} alt="" />
        <img src={GalleryPic18} alt="" />
        <img src={GalleryPic19} alt="" />
        <img src={GalleryPic20} alt="" />
        <img src={GalleryPic21} alt="" />
        <img src={GalleryPic22} alt="" />
        <img src={GalleryPic23} alt="" />
        <img src={GalleryPic24} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
