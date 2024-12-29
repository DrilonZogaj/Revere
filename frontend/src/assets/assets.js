
//IMAGES
import logo from "./logo.png";
import bannerImg from "./banner-img.jpg";
import aboutusImg from './clientservice.png';
//----------------------------
export const assets = {
  logo,
  bannerImg,
  aboutusImg,
};

//DOCTORS
import doc1 from "./doc1.jpg";
import doc2 from "./doc2.jpg";
import doc3 from "./doc3.jpg";
import doc4 from './doc4.jpg';
import doc5 from './doc5.jpg';
import doc6 from './doc6.jpg';
//--------------------------------------------------
export const doctors = [
  {
    id: 'doc1',
    name: "Dr. James Peterson",
    image: doc1,
    desc: "Specializes in restorative dentistry, focusing on crowns, bridges, dentures. Providing effective care ensuring comfort and clarity for all patients in need.",
  },
  {
    id: 'doc2',
    name: "Dr. Olivia Bennett",
    image: doc2,
    desc: "Focuses on pediatric and family dentistry, ensuring children have an enjoyable and stress-free experience while promoting overall oral health education.",
  },
  {
    id: 'doc3',
    name: "Dr. Emily Carter",
    image: doc3,
    desc: "A skilled dentist specializing in preventive and cosmetic care, known for her compassionate approach and dedication to creating beautiful, lasting smiles.",
  },
  {
    id: 'doc4',
    name: "Dr. Daniel Hayes",
    image: doc4,
    desc: "Expert in oral surgery and implantology, providing minimally invasive treatments with state-of-the-art technology to ensure optimal outcomes and maximum patient comfort.",
  },

  {
    id: 'doc5',
    name: "Dr. Sophia Ramirez",
    image: doc5,
    desc: "Specializes in preventive and cosmetic dentistry, including smile makeovers and dental implants, offering high-quality care with a gentle, patient-focused approach.",
  },

  {
    id: 'doc6',
    name: "Dr. Ethan Collins",
    image: doc6,
    desc: "Focuses on cosmetic dentistry, helping patients enhance their smiles through procedures like teeth whitening and veneers, ensuring natural, stunning results.",
  },
];


//SERVICES
import restorativeIcon from './restorative-icon.png';
import pediatricIcon from "./pediatric-icon.png";
import cosmeticIcon from './cosmetic-icon.png';
import oralSurgeryIcon from './oral-surgery-icon.png';
import preventiveIcon from './preventive-icon.png';
import crownsBridgesIcon from './crown-bridges-icon.png';
import emergencyCareIcon from './emergency-icon.png';
import orthodonticIcon from './orthodontic-icon.png';
//-------------------------------------------------
export const services = [
  {
    id: 1,
    name: "Restorative Dentistry",
    icon: restorativeIcon,
    desc: "Restores damaged teeth through crowns, bridges, and dentures to restore full function and aesthetics."
  },
  {
    id: 2,
    name: "Pediatric Dentistry",
    icon: pediatricIcon,
    desc: "Provides dental care for children, focusing on creating a positive and comfortable experience while promoting long-term oral health."
  },
  {
    id: 3,
    name: "Cosmetic Dentistry",
    icon: cosmeticIcon,
    desc: "Enhances the aesthetics of your smile with treatments like teeth whitening, veneers, and other procedures to brighten and straighten teeth."
  },
  {
    id: 4,
    name: "Oral Surgery & Implantology",
    icon: oralSurgeryIcon,
    desc: "Specialized in oral surgery and implant placement, providing minimally invasive procedures for optimal outcomes."
  },
  {
    id: 5,
    name: "Preventive Dentistry",
    icon: preventiveIcon,
    desc: "Focuses on proactive measures to prevent dental issues such as cavities, gum disease, and tooth decay through regular cleanings and exams."
  },
  {
    id: 6,
    name: "Dental Crowns & Bridges",
    icon: crownsBridgesIcon,
    desc: "Restores the shape, size, and strength of damaged teeth using crowns and bridges for a natural-looking finish."
  },
  {
    id: 7,
    name: "Emergency Dental Care",
    icon: emergencyCareIcon,
    desc: "Provides immediate dental care for urgent issues like toothaches, broken teeth, or accidents, ensuring quick relief."
  },
  {
    id: 8,
    name: "Orthodontics",
    icon: orthodonticIcon,
    desc: "Offers treatments to straighten teeth, improve bite function, and enhance facial aesthetics through braces, aligners, and other orthodontic tools."
  }
];
// Testimonials
import testimonial1 from './Sarah Johnson.png';
import testimonial2 from './Michael Brown.png';
import testimonial3 from './Emily Davis.png';
export const testimonials = {
  testimonial1,
  testimonial2,
  testimonial3,
};




// Social Icons
// import facebook from './facebook.png';
// import instagram from './instagram.png';
// import twitter from './twitter.png';
// import linkedin from './linkedin.png'

// const socials =[{

//   name: "facebook",

import facebook from './facebook.png';
import instagram from './instagram.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';

export const socials = [
  {
    name: "Facebook",
    icon: facebook,
  },
  {
    name: "Instagram",
    icon: instagram,
  },
  {
    name: "Twitter",
    icon: twitter,
  },
  {
    name: "LinkedIn",
    icon: linkedin,
  },
];
