import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";

function ContactUs() {
  const [submitForm, setSubmitForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  const validate = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "firstName":
        if (!/^[A-Z][a-z]*$/.test(value)) {
          newErrors.firstName = "First name must start with a capital letter.";
        } else {
          delete newErrors.firstName;
        }
        break;
      case "lastName":
        if (!/^[A-Z][a-z]*$/.test(value)) {
          newErrors.lastName = "Last name must start with a capital letter.";
        } else {
          delete newErrors.lastName;
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Please enter a valid email address.";
        } else {
          delete newErrors.email;
        }
        break;
      case "phoneNumber":
        if (!/0\d{8}/.test(value)) {
          newErrors.phoneNumber = "Phone number must be: 04x xxx xxx.";
        } else {
          delete newErrors.phoneNumber;
        }
        break;
      case "message":
        if (value.trim() === "") {
          newErrors.message = "Message is required.";
        } else {
          delete newErrors.message;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubmitForm({
      ...submitForm,
      [name]: value,
    });

    validate(name, value);
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (submitForm.message.trim() === "") {
    toast.error("Please enter your message");
    return;
  }

  if (Object.keys(errors).length === 0) {
    try {
      const response = await fetch("http://localhost/backend/db/submit.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(submitForm),
      });

      const data = await response.json(); 
     
      if (data.success) {
        setResponseMessage(data.message); 
        toast.success("Form submitted successfully!");
      } else {
        setResponseMessage(data.message || "Failed to submit the form.");
        toast.error(data.message || "Submission failed.");
      }


      setSubmitForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error submitting form: " + error.message);
    }
  } else {
    toast.error("Please fix the errors in the form.");
  }
};

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={true}
      />
      <div className="contact-us-page">
        <h1>Contact Us</h1>
        <p>
          At Revère Dental Clinic, we're dedicated to your dental health and comfort. Whether you have questions, need to book an appointment, or want more information about our services, our friendly team is here to help. Let us care for your smile!
        </p>
        <div className="contact-container">
          <div className="form-submit">
            <form className="submit-card" onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={submitForm.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={submitForm.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </label>
              <label>
                E-mail:
                <input
                  type="email"
                  name="email"
                  value={submitForm.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={submitForm.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <span className="error">{errors.phoneNumber}</span>
                )}
              </label>
              <textarea
                name="message"
                value={submitForm.message}
                onChange={handleChange}
                placeholder="Enter your message"
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="location-details">
            <h2>Our Location</h2>
            <p>Revère Dental Clinic</p>
            <p>123 Smile Street</p>
            <p>Happy Town, HT 56789</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@reveredental.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
