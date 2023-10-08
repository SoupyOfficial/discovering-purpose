import React from 'react';
import SmallCard from "./SmallCard"

const Contact = () => {
  return (
    <SmallCard>
      <section id="service">
        <h2>Service 1</h2>
        <div style={{paddingBottom: "20px"}}>
          <p style={{padding: "20px"}}>Get in touch with us to schedule an appointment or ask questions...</p>
        </div>
        <p style={{color: "blue", position: "absolute", 
  bottom: 0, left: 2}}>Link to Evaluation</p>
        <div style={{textAlign: "right", position: "absolute", 
  bottom: 0, right: 2}}>
          <p style={{color: "black"}}>Self-Pay Cost</p>
          <p style={{color: "blue"}}>Check your Co-Pay</p>
        </div>
      </section>
    </SmallCard>
  );
};

export default Contact;
