import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PartyRentals = () => {
  return (
    <>
      <Navbar />
      <div className="item-card">
        <h4 style={{ fontSize: "22px", textAlign: "center" }}>
          Items available for rent:{" "}
        </h4>
        <ul className="list-items">
          <li className="list-item">Chairs (with covers)</li>
          <li className="list-item">Table Linens & Runners</li>
          <li className="list-item">Center Pieces</li>
          <li className="list-item">Buffet Tables (round and rectangular)</li>
          <li className="list-item">Back Drops</li>
          <li className="list-item">Cake Stands</li>
          <li className="list-item">Chargers</li>
          <li className="list-item">Chafing Dishes</li>
          <li className="list-item">Color</li>
          <li className="list-item">Coffee Service</li>
          <li className="list-item">Decorations</li>
          <li className="list-item">Dinnerware</li>
          <li className="list-item">Glassware</li>
          <li className="list-item">Invitations</li>
          <li className="list-item">Party Favors</li>
          <li className="list-item">Pitchers</li>
          <li className="list-item">Lights</li>
          <li className="list-item">Tables</li>
          <li className="list-item">Personalized Desserts</li>
          <li className="list-item">Bar & Bar Acccesories</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default PartyRentals;
