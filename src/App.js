import React from 'react';
import './index.css';
import { HomePage } from './components/HomePage';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './Images.css';

function App() {
  return (
    <div className="page-container">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
