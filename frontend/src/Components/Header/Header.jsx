import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(servicesRef ) {
  // Scroll to services                      
   function scrollToServices() {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
    <div className="header">
      <div className="header-content">
        <h1>Your Smile, Our Priority</h1>
        <p>
          At Revère, we're dedicated to transforming smiles and boosting
          confidence. Our expert team combines advanced technology with
          personalized care to deliver exceptional dental services, from routine
          checkups to cosmetic enhancements. We're here to ensure your dental
          health and happiness, one smile at a time.
        </p>
        <div className="button-group">
          <Link to='/appointments' >
          <button className="primary-button">Book an Appointment</button>
          </Link>
          <button className="secondary-button" onClick={scrollToServices}>View our Services</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
