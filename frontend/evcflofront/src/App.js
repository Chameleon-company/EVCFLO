import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Data from "./pages/datapage";
import Research from "./pages/research";
import AImodels from "./pages/aimodels";
//import AI models
import DensityClustering from "./aimodels/densityclustering";
import FAQ from "./pages/faq";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/datapage" element={<Data />} />
        <Route path="/research" element={<Research />} />
        <Route path="/aimodels" element={<AImodels />} />
        <Route path="/densityclustering" element={<DensityClustering />} />
        <Route
          exact
          path="/densityclusteringmap"
          render={() => {
            window.location.href = "densityclusteringmap.html";
          }}
        />
        <Route
          exact
          path="/EVCSrecommendationsmap"
          render={() => {
            window.location.href = "EVCSrecommendationsmap.html";
          }}
        />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
