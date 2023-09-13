import React from 'react';
import './index.css';
import { HomePage } from './components/HomePage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './Images.css';
import { useRef } from 'react';

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const widthThreshold = 650;
  const largeScreen = windowSize.current[0] >= widthThreshold
  return (
    <BrowserRouter basename="/chousnaps">
      <Routes>
        <Route path='/' element={<HomePage largeScreen={largeScreen}/>}/>
        <Route path='/gallery' element={<GalleryPage largeScreen={largeScreen}/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
