import React from "react";
import { services } from "../../assets/assets";
import './OurServices.css'
function OurServices() {
  return (
    <>
      <div id="services" className="service-card-container">
        <h1 className="service-card-container-title">Our Services</h1>
        <p className="service-card-container-text">
          Explore the variety of dental services we offer, tailored to meet your needs and enhance your smile.
        </p>
        <div className="service-card-section">
          {services.map((item) => (
            <div className="service-card" key={item.id}>
              <img className="service-icon" src={item.icon} alt={item.name} />
              <div className="service-text">
                <h2 className="service-title">{item.name}</h2>
                <p className="service-desc">{item.desc}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}

export default OurServices
