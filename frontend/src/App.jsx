import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import MainBody from './components/Mainbody';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? (
        <><Navbar />
        <MainBody />
        <div className='w-full absolute bottom-0'>
        <Footer />
        </div>
        </>) : (<Navigate to="/login" />)} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
