import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import MainBody from './components/Mainbody';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? (<><Navbar /><MainBody /><Footer /></>) : (<Navigate to="/login" />)} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
