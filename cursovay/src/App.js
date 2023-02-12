import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import MainPage from "./pages/MainPage";
import Scan from "./pages/Scan";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/main/:id" element={<CardDetails />} />
        <Route path="/scan/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App;
