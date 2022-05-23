import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import MainComponent from './Components/MainComponent';

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
