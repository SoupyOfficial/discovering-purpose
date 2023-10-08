import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import Card from './Pages/Components/Card';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import NoPage from './Pages/404';
import Research from './Pages/Research';
import Insurance from './Pages/Insurance';

import Admin from './Pages/Admin';

export default function App() {
  
  return (
    <Router>
      <main className="app">
        <Routes>
          {/* <Route path="/"> */}
            <Route exact path="/" element={
              <div>
                <Header className="header" />
                <Home />
                <Card><About /></Card>
                <Card><Services /></Card>
                <Card><Contact /></Card>
                <Card><Research /></Card>
                <Card><Insurance /></Card>
                <Footer />
              </div>
                } />
            <Route path="/admin" element={<Admin/>} />

            <Route path="*" element={<NoPage/>} />
        </Routes>
      </main>
    </Router>
  );
}