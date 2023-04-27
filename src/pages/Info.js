import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Info.css";

const Info = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="info">
          <div className="text-info">
            <h2>About</h2>
            <p>
              Gabby's Party Rentals and Event Planning is the most reliable and
              trustworthy party rental and planning company serving Connecticut
              and the Hudson Valley.{" "}
            </p>
            <p>
              {" "}
              While we're based Stamford, CT we can meet you anywhere for your
              event needs! We're ready to serve events ranging from simple
              dinner parties to complex corporate events.
            </p>
            <p>
              At Gabby's Party Rentals and Event Planning, we value quality and
              aim to make every event memorable. Our flexibility allows us to
              meet the diverse needs of our clientele. From simple pick up of
              rentals to complete setup and take down, Gabby's can be as
              involved as a client needs for their day at competitive,
              budget-friendly pricing.
            </p>
            <p>
              Personalized customer care is the foundation of our business. Give
              us a call, and we'll help make your dream event into a reality!
            </p>
            <p>
              We offer a vast variety of rental options which range in size and
              color. Most of our inventory is listed below, but if you have
              something you're looking for and don't see it on our list, please
              reach out and check in as we're always updating our stock.
            </p>
          </div>
          <div className="item-card">
            <h4 style={{ fontSize: "22px", textAlign: "center" }}>
              Items available for rent:{" "}
            </h4>
            <ul className="list-items">
              <li className="list-item">Chairs (with covers)</li>
              <li className="list-item">Table Linens & Runners</li>
              <li className="list-item">Center Pieces</li>
              <li className="list-item">
                Buffet Tables (round and rectangular)
              </li>
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
          <div className="client-feedback">
            <h3 style={{ textAlign: "center" }}>Client Feedback</h3>
            <div className="entries">
              <p>
                (english) "Beautiful! Excellent service and reasonable prices. I
                highly recommend their services!" <br /> (spanish) "Bello!
                Excelente servicio y precios razonables. Lo recomiendo
                ampliamente." -Gema J.
              </p>
              <p>
                (english) “Gabby's decorations are elegant and carefully
                crafted. Not only did she make sure that all of the decor and
                event planning went smoothly, but also that my special day was
                perfect.” <br />​ (spanish) "Las decoraciones de Gabby son
                elegantes y cuidadosamente elaboradas. No solo se aseguró de que
                la decoración y la planificación del evento se desarrollaran sin
                problemas, sino que también se aseguró que mi día especial fue
                perfecto." - Denys R.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
