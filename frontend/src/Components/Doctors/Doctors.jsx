import React from "react";
import "./Doctors.css";
import { doctors } from "../../assets/assets";

function Doctors() {
  return (
    <>
    <div className="card-container">
      <h1 className="card-container-title">Meet the Specialists at Revère Dental Clinic</h1>
      <p className="card-container-text">
        At Revère Dental Clinic, our team of highly skilled and compassionate professionals is dedicated to providing exceptional dental care tailored to your needs. Each member of our team brings years of expertise and a commitment to excellence, ensuring that every patient experiences comfort, trust, and outstanding results. From routine cleanings to advanced treatments, our doctors combine cutting-edge technology with a personalized approach to help you achieve the healthy, beautiful smile you deserve.
      </p>
      <div className="card-team">
        {doctors.map((item, index) => (
          <div className="card" key={item.id}>
            <img className="card-img" src={item.image} alt={`${item.name}`} />
            <h2 className="card-title">{item.name}</h2>
            <p className="card-text">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Doctors;
