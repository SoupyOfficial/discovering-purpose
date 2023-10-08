import React from 'react';
import './Styles/Services.css';
import Service1 from "./Components/Services/Service1"

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-text">
        <h2>Opportunities</h2>
      </div>
      <div className="services-grid">
        <Service1/>
        <Service1/>
        <Service1/>
        <Service1/>
      </div>
    </section>
  );
};

export default Services;
