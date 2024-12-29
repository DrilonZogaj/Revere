import React from "react";
import "./Testimonials.css";
import { testimonials as testimonialImages } from "../../assets/assets"; 

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: testimonialImages.testimonial1,
      text: "The team at Revère Dental Clinic is amazing! They made me feel comfortable and explained every step of the process. Highly recommend!",
    },
    {
      name: "Michael Brown",
      image: testimonialImages.testimonial2,
      text: "I was nervous about my treatment, but the staff were so kind and professional. My teeth have never looked better!",
    },
    {
      name: "Emily Davis",
      image: testimonialImages.testimonial3,
      text: "From the moment I walked in, I felt cared for. The clinic is clean, modern, and the staff are incredible. Best dental experience ever!",
    },
  ];

  return (
    <div className="testimonials-page">
      <h1>What Our Patients Say</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
