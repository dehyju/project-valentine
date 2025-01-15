//Library Imports
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//CSS Imports
import './index.css';
import './App.css'

//Page Imports
import Index from './components/pages/Index.jsx';
import Login from './components/pages/Login.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
