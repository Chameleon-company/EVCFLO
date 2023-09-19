import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Data from "./pages/datapage";
import Research from "./pages/research";
import AImodels from "./pages/aimodels";
import News from "./pages/news";
//import AI models
import DensityClustering from "./aimodels/densityclustering";
import FAQ from "./pages/faq";
import Login from "./pages/login";
import Logout from "./pages/logout";
import User from "./pages/user";
import SignUp from "./pages/SignUp";
import Ourteam from "./pages/ourteam";

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
        <Route path="/news" element={<News />} />

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
        <Route path="/ourteam" element={<Ourteam />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
