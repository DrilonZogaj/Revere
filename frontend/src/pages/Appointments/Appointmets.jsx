import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Appointments.css";

function Appointments() {
  const location = useLocation();
  const { firstName, lastName, email, phoneNumber } = location.state || {};

  const [bookForm, setBookForm] = useState({
    name: `${firstName || ""} ${lastName || ""}`,
    email: email || "",
    phone: phoneNumber || "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const [err, setErr] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Disable submit button during submission

  const services = [
    { id: 1, name: "Restorative Dentistry" },
    { id: 2, name: "Pediatric Dentistry" },
    { id: 3, name: "Cosmetic Dentistry" },
    { id: 4, name: "Oral Surgery & Implantology" },
    { id: 5, name: "Preventive Dentistry" },
    { id: 6, name: "Dental Crowns & Bridges" },
    { id: 7, name: "Emergency Dental Care" },
    { id: 8, name: "Orthodontics" },
  ];

  const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^0\d{8}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErr = {};
    if (!nameRegex.test(bookForm.name)) {
      newErr.name =
        "Please enter a valid name (First and Last Name, both starting with capital letters).";
    }
    if (!emailRegex.test(bookForm.email)) {
      newErr.email = "Please enter a valid email address.";
    }
    if (!phoneRegex.test(bookForm.phone)) {
      newErr.phone = "Phone number must start with 0 and contain 8 digits.";
    }
    setErr(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the validation errors.");
      return;
    }

    setIsSubmitting(true); // Disable the submit button

    try {
      // Create the appointment and get the response from PHP
      const response = await createAppointment(bookForm);

      if (response.status === "success") {
        toast.success(response.message || "Appointment created successfully!");

        // Clear the form after successful submission
        setBookForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          notes: "",
        });
      } else {
        toast.error(response.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setIsSubmitting(false); // Re-enable the button after submission
    }
  };

  const createAppointment = async (formData) => {
    const response = await fetch("http://localhost/backend/db/addAppointments.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    });

    const data = await response.json(); // Parse the response as JSON
    return data; // Return the response to handle it in React
  };

  return (
    <div className="appointments-page">
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

      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit} method="POST">
        <input
          name="name"
          value={bookForm.name}
          onChange={handleChange}
          placeholder="Name Surname"
          required
        />
        {err.name && <span className="error">{err.name}</span>}

        <input
          name="email"
          value={bookForm.email}
          onChange={handleChange}
          placeholder="email@domain.com"
          required
        />
        {err.email && <span className="error">{err.email}</span>}

        <input
          name="phone"
          value={bookForm.phone}
          onChange={handleChange}
          placeholder="04X XXX XXX"
          required
        />
        {err.phone && <span className="error">{err.phone}</span>}

        <input
          name="date"
          value={bookForm.date}
          onChange={handleChange}
          type="date"
          required
        />

        <select
          name="time"
          value={bookForm.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="5:00 PM">5:00 PM</option>
        </select>

        <select
          name="service"
          value={bookForm.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>

        <textarea
          name="notes"
          value={bookForm.notes}
          onChange={handleChange}
          placeholder="Additional notes"
        ></textarea>

        <button type="submit" name="book" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Appointments;
