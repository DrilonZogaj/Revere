import React from "react";
import "./AboutUs.css";
import { assets } from "../../assets/assets";

function AboutUs() {
  return (
    <div className="about-us-page">
      <h2>About Us</h2>
      <div className="about-us-container">
        <div className="about-us-content">
          <h3>Welcome to Revère Dental Clinic</h3>
          <p>
            At Revère Dental Clinic, we are committed to delivering the highest quality dental care in a professional and welcoming environment. Our team of experienced specialists collaborates to provide personalized care that prioritizes your comfort and oral health.
          </p>
          <p>
            We offer a comprehensive range of services, including preventive dentistry, cosmetic enhancements, and restorative treatments. Whether you visit us for a routine checkup or a complete smile transformation, you can trust Revère to help you achieve and maintain a healthy, radiant smile.
          </p>
          <p>
            Your smile is our passion, and we are here to ensure it stays beautiful and strong for years to come.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src={assets.aboutusImg}
            alt="Dental clinic team"
          />
        </div>
      </div>
      <div className="our-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Compassion: </strong>At Revère Dental Clinic, we prioritize treating every patient with genuine kindness and understanding, ensuring a comfortable and supportive experience.</li>
          <li><strong>Excellence: </strong>We are dedicated to delivering the highest standard of care and achieving outstanding results through precision and professionalism..</li>
          <li><strong>Innovation: </strong>By utilizing the latest advancements in dental techniques and technology, we ensure that our patients receive cutting-edge treatment tailored to their needs.</li>
          <li><strong>Trust: </strong>Building long-lasting relationships with our patients through transparency, reliability, and personalized care is at the heart of everything we do..</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
