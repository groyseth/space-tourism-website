import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import MainComponent from './Components/MainComponent';

import Explore from './pages/Explore';
function App() {
  return (
  <>

  <Routes>
            <Route exact path="/" element={<MainComponent />} />
       
      </Routes>
  </>
  );
}

export default App;
