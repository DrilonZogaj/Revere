import React from "react";
import "./Footer.css";
import { socials } from "../../assets/assets";

function Footer() {
  // Scroll to top button
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Revère Dental Clinic</h3>
          <p>
            At Revère Dental Clinic, we are committed to delivering exceptional dental care
            with a focus on compassion, innovation, and excellence. Your smile is our pride!
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Revère Street, Springfield, USA</p>
          <p>Email: contact@reveredental.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {socials.map((social, index) => (
              <a key={index} href="#" aria-label={social.name}>
                <img src={social.icon} alt={social.name} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <button className="scroll-top-btn" onClick={scrollToTop}>
        Scroll to Top
      </button>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Revère Dental Clinic. Website by Drilon Zogaj, All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
