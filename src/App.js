import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameDirections from './components/game-directions';
import Bingo from './components/bingo'; 
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameDirections/>} />
        <Route path="/bingo" element={<Bingo/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
