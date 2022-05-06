import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import JourneyListPage from './pages/JourneyListPage';
import JourneyPage from './pages/JourneyPage';
import NotFoundPage from './pages/NotFoundPage';
import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react'

function App() {

  (function () {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://pngshare.com/wp-content/uploads/2021/06/Netflix-Logo-Wallpaper-4.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();

  useEffect(() => {
    document.title = "Netflix PH - Romenick B. Garcia"
  }, [])


  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/journey-list" element={<JourneyListPage />} />
        <Route path="/journey-page/:name" element={<JourneyPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;