// material ui fonts loaded at top level
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Data from './pages/datapage';
import Research from './pages/research';
import AImodels from './pages/aimodels';
import News from './pages/news';
import DensityClustering from './aimodels/densityclustering';
import FAQ from './pages/faq';
import Login from './pages/login';
import Logout from './pages/logout';
import User from './pages/user';
import SignUp from './pages/SignUp';
import Certificate from './pages/certificates';
import Spare from './pages/spare';
import { Box } from '@mui/material';
import Brochure from "./components/Brochure";
import GetQuotes from './components/GetQuotes';
import Sustainability from './pages/sustainability';
import Support from './components/Support';
import Ourteam from './pages/ourteam';

function App() {
  return (
    <Router>
      <Navbar />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Box
          flexGrow={1}
          style={{
            paddingBottom: '500px', // footer height
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/datapage" element={<Data />} />
            <Route path="/research" element={<Research />} />
            <Route path="/aimodels" element={<AImodels />} />
            <Route path="/news" element={<News />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/accessories" element={<Spare />} />
            <Route path="/densityclustering" element={<DensityClustering />} />
            <Route path="/support" element={<Support />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/getquotes" element={<GetQuotes />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route
              exact
              path="/densityclusteringmap"
              render={() => {
                window.location.href = 'densityclusteringmap.html';
              }}
            />
            <Route
              exact
              path="/EVCSrecommendationsmap"
              render={() => {
                window.location.href = 'EVCSrecommendationsmap.html';
              }}
            />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ourteam" element={<Ourteam />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
