import React from "react";
import "../styles/HomePageContent.css";
import GabbyHomePagePic1 from "../images/Gabby_Homepage_Pic.jpg";
import GabbyHomePagePic2 from "../images/Gabby_Homepage_Pic2.jpg";

const HomepageContent = () => {
  return (
    <div className="container-Content-Home">
      <img src={GabbyHomePagePic1} alt="" />
      <h1>
        Proudly Serving Connecticut & the Hudson Valley <br /> ~
        <br /> Orgullosamente sirviendo a Connecticut y al Valle de Hudson
      </h1>
      <img src={GabbyHomePagePic2} alt="" />
    </div>
  );
};

export default HomepageContent;
