import React, { useState } from 'react';
import './Styles/Contact.css'; // Import a CSS file for styling
import contactImage from "../Assets/TelehealthClipArt.png";
import emailjs from 'emailjs-com';

const Contact = () => {
  const emailConfig = "wq3a16Yahu89CB4Tw"
  emailjs.init(emailConfig);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    symptoms: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    emailjs.send( "service_cja885u", "template_dyxtyvo", formData);

    setFormData({
      name: '',
      email: '',
      symptoms: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact-section">
          <h2>Contact Lori Perver, LMHC, EDTC</h2>
          <p>Get in touch with us to schedule an appointment or ask questions...</p>
      <div className="contact-content">
        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="symptoms"
              name="symptoms"
              placeholder="Symptoms"
              value={formData.symptoms}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="What would you like Lori to know?"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
