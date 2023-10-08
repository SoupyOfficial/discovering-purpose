import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Styles/ResearchPage.css';
import { loadResearch } from "../Firebase";
import Card from './Components/Card';
import SmallCard from './Components/Services/SmallCard';


const ResearchPage = () => {
  const [researchData, setResearchData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        await loadResearch(setResearchData);
        };
        fetchData();
    }, []);

  return (
    <section id="research" className="research-section">
        <header className="header-content" 
        style={{
            // backgroundColor: `${backgroundColor}`,
            // opacity: scrollY > 10 ? 1 : 0.5,
            }}>
        <div className="logo">
            <img src="https://placehold.co/40x20" alt="Logo" />
        </div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
        </ul>   
        </header>
        <h2>Exploratory Research</h2>
        <div className='grid-container'>
        {researchData.map(item => (
            <SmallCard>
                <div key={item.id ? item.id : "null"}>
                    <h2>
                        <a target='_blank' rel='noopener noreferrer' href={item.href.startsWith('http') ? item.href : `http://${item.href}`}>{item.title ? item.title : "null"}</a>
                    </h2>
                    <p>{item.content ? item.content: "null"}</p>
                </div>
            </SmallCard>
        ))}
        </div>
    </section>
  );
};

export default ResearchPage;
