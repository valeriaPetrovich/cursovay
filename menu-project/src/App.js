import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails";
import Home from "./Home";
import Booking from "./pages/Booking";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}
export default App;
/*
import React from 'react';
import { useBarcode } from 'react-barcodes';

function App() {
  const { inputRef } = useBarcode({
    value: 'react-barcodes',
    options: {
      background: '#ccffff',
    }
  });
  
  return <svg ref={inputRef} />;
};

export default App;*/
