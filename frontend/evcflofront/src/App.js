import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Data from "./pages/data";
import Locate from "./pages/locate";
import Research from "./pages/research";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/locate" element={<Locate />} />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
