import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import About from './components/About/About';
import Branches from './components/Branches/Branches';
import Files from './components/Files/Files';
import Peoples from './components/Peoples/Peoples';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/peoples" element={<Peoples />} />
        <Route path="/files" element={<Files />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
