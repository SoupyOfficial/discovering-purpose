import React from 'react';
import './Styles/About.css'; // Import a CSS file for styling

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="https://placehold.co/300x300" alt="Psychiatrist" />
        </div>
        <div className="about-text">
          <h2>About Lori</h2>
          <p>Lori Perver is a licensed clinician who has been practicing clinical psychotherapy since 2016.</p>
          <p>Lori specializes in mood disorders and substance use amongst teens and young adults.</p>
          <p>She is also specialized in treating eating disorders, personality disorders, as well as parasuicidal/suicidal tendencies.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
