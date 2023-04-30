import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/PartyRentals.css";

//importing Pictures
import PartyRentalsPic1 from "../images/PartyRentalsItems/PartyRentalsItemPic1.jpg";
import PartyRentalsPic2 from "../images/PartyRentalsItems/PartyRentalsItemPic2.jpg";
import PartyRentalsPic3 from "../images/PartyRentalsItems/PartyRentalsItemPic3.jpg";
import PartyRentalsPic4 from "../images/PartyRentalsItems/PartyRentalsItemPic4.jpg";
import PartyRentalsPic5 from "../images/PartyRentalsItems/PartyRentalsItemPic5.jpg";
import PartyRentalsPic6 from "../images/PartyRentalsItems/PartyRentalsItemPic6.jpg";
import PartyRentalsPic7 from "../images/PartyRentalsItems/PartyRentalsItemPic7.jpg";
import PartyRentalsPic8 from "../images/PartyRentalsItems/PartyRentalsItemPic8.jpg";
import PartyRentalsPic9 from "../images/PartyRentalsItems/PartyRentalsItemPic9.jpg";
import PartyRentalsPic10 from "../images/PartyRentalsItems/PartyRentalsItemPic10.jpg";
import PartyRentalsPic11 from "../images/PartyRentalsItems/PartyRentalsItemPic11.jpg";
import PartyRentalsPic12 from "../images/PartyRentalsItems/PartyRentalsItemPic12.jpg";

const PartyRentals = () => {
  return (
    <>
      <Navbar />
      <div className="item-card-container">
        <h4 style={{ fontSize: "22px", textAlign: "center" }}>
          Items available for rent:{" "}
        </h4>
        <ul className="list-items-card">
          <div className="list-items">
            <img src={PartyRentalsPic1} alt="" />
            <li className="list-item">Chairs (with covers)</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic2} alt="" />
            <li className="list-item">Table Linens & Runners</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic3} alt="" />
            <li className="list-item">Glassware/Utensils</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic4} alt="" />
            <li className="list-item">Pitchers</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic5} alt="" />
            <li className="list-item">Buffet Tables (round and rectangular)</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic6} alt="" />
            <li className="list-item">Dinnerware</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic7} alt="" />
            <li className="list-item">Center Pieces</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic8} alt="" />
            <li className="list-item">Party Decorations</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic9} alt="" />
            <li className="list-item">Personalized Desserts</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic10} alt="" />
            <li className="list-item">Cake Stands</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic11} alt="" />
            <li className="list-item">Invitations</li>
          </div>
          <div className="list-items">
            <img src={PartyRentalsPic12} alt="" />
            <li className="list-item">Candle Lights</li>
          </div>

          <li className="list-item">Back Drops</li>
          <li className="list-item">Chargers</li>
          <li className="list-item">Chafing Dishes</li>
          <li className="list-item">Color</li>
          <li className="list-item">Coffee Service</li>
          <li className="list-item">Party Favors</li>
          <li className="list-item">Tables</li>
          <li className="list-item">Bar & Bar Acccesories</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default PartyRentals;
