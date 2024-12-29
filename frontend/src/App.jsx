import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Appointmets from "./pages/Appointments/Appointmets";
import NoPage from "./pages/NoPage/Error404";
import OurServices from "./Components/OurServices/OurServices";
import Doctors from "./Components/Doctors/Doctors";
import AboutUs from "./Components/About/AboutUs";
import ContactUs from "./Components/Contact Us/ContactUs";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import Testimonials from "./Components/Testimonials/Testimonials";
import SubmissionMessagePage from "./pages/SubmissionPage/SubmissionPage";

function App() {
  return (
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          
          <Route path="/messages" element={<SubmissionMessagePage/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/appointments" element={<Appointmets />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
  );
}

export default App;
