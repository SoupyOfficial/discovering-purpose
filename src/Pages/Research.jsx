import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Styles/Research.css';
import Service1 from './Components/Services/Service1';
import NetflixCarousel from './NetflixCarousel'
import { loadRecentResearch } from "../Firebase";


const Research = () => {
  const [researchData, setResearchData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        await loadRecentResearch(setResearchData);
        };
        fetchData();
    }, []);

  return (
    <section id="research" className="research-section">
        <h2>Exploratory Research</h2>
        <NetflixCarousel items={researchData} className="carousel" />
    </section>
  );
};

export default Research;
