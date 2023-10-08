import React from 'react';
import './Styles/Footer.css';
import ACALogo from "../../Assets/Affiliations/ACA.png";
import APALogo from "../../Assets/Affiliations/APA.png";
import IAAOCLogo from "../../Assets/Affiliations/IAAOC.jpg";
import IAEDPLogo from "../../Assets/Affiliations/IAEDP.png";
import IARTCLogo from "../../Assets/Affiliations/IARTC.webp";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="affiliations">
          <h3>Counseling Affiliations</h3>
          <ul>
            <li><img className="logo" src={ACALogo} alt="Affiliation 1 Logo" /></li>
            <li><img className="logo" src={APALogo} alt="Affiliation 2 Logo" /></li>
            <li><img className="logo" src={IAAOCLogo} alt="Affiliation 3 Logo" /></li>
            <li><img className="logo" src={IAEDPLogo} alt="Affiliation 4 Logo" /></li>
            <li><img className="logo" src={IARTCLogo} alt="Affiliation 5 Logo" /></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Phone: 321-504-8766</p>
          <p>Email: Lori.Perver@Outlook.com</p>
          <p>Headway: www.example.com</p>
          <p>Psychology Today: www.example.com</p>
          <p>Address: Telehealth, Florida</p>
        </div>
      </footer>
      <p className="author">&copy; 2023 Jacob Campbell. All rights reserved.</p>
    </div>
  );
};

export default Footer;
