import React from 'react'
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ChargingLocations from "./pages/ChargingLocations";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/ChargingLocations" element={<ChargingLocations />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;