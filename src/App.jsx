import './App.css';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
  
      <h1 className='flex '>Casa Rosa</h1>
    
    </BrowserRouter>
  
  );
}

export default App;
