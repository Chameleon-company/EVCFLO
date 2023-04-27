import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Data from "./pages/datapage";
import Locate from "./pages/locate";
import Research from "./pages/research";
import AImodels from "./pages/aimodels";
//import AI models
import DensityClustering from "./aimodels/densityclustering";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/datapage" element={<Data />} />
        <Route path="/locate" element={<Locate />} />
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
