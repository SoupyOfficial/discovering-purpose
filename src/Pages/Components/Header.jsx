import React, { useState, useEffect } from 'react';
import './Styles/Header.css';

const Header = () => {
  // Attempt 1
  const [backgroundColor, setBackgroundColor] = useState('blue');

  // Function to calculate the background color based on scroll position
  const calculateBackgroundColor = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const gradientColor = calculateGradientColor(scrollPosition / windowHeight);
    setBackgroundColor(gradientColor);
  };

  // Function to calculate gradient color based on a percentage value
  const calculateGradientColor = (percentage) => {
    // Replace these with your specific gradient colors
    const gradientColor1 = 'rgba(255, 0, 0, 1)'; // Replace with your color
    const gradientColor2 = 'rgba(0, 0, 255, 1)'; // Replace with your color

    // Calculate the interpolated color based on the percentage
    const r = Math.floor(
      parseInt(gradientColor1.slice(4, 7)) * percentage +
        parseInt(gradientColor2.slice(4, 7)) * (1 - percentage)
    );
    const g = Math.floor(
      parseInt(gradientColor1.slice(9, 12)) * percentage +
        parseInt(gradientColor2.slice(9, 12)) * (1 - percentage)
    );
    const b = Math.floor(
      parseInt(gradientColor1.slice(14, 17)) * percentage +
        parseInt(gradientColor2.slice(14, 17)) * (1 - percentage)
    );
    
    console.log(r, g, b)

    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  return (
    <header className="header-content" 
      style={{
          // backgroundColor: `${backgroundColor}`,
          // opacity: scrollY > 10 ? 1 : 0.5,
        }}>
      <div className="logo">
        <img src="https://placehold.co/40x20" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>   
    </header>
  );
};

export default Header;
