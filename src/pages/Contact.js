import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="form-contact">
          <div className="contact-info">
            {" "}
            <input className="c1" type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="message-info">
            <input className="c2" type="text" placeholder="Subject" />
            <textarea
              placeholder="Message"
              name="Message"
              id="message"
              cols="50"
              rows="5"
            ></textarea>
          </div>
          <button className="btn-send-message">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
