import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails";
import Booking from "./pages/Booking/Booking";
import Home from "./Home/Home";
import MainPage from "./pages/MainPage";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App;
