import React, { useState, useEffect } from 'react';
import './Styles/Header.css';

const Header = () => {

  return (
    <header className="header-content">
      <div className="logo">
        <img src="https://placehold.co/40x20" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#insurance">Insurance</a></li>
      </ul>   
    </header>
  );
};

export default Header;
