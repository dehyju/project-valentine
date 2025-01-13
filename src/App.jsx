//Library Imports
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//CSS Imports
import './index.css';
import './App.css'

//Page Imports
import Index from './components/pages/Index.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
