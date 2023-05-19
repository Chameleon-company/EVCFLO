import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import Business from "./pages/Business";
import EvHomepage from "./pages/EvHomepage";
import Partners from "./pages/Partner";
import Contact from "./pages/contact";
import EVCharge from "./pages/EVcharge";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/business" element={<Business />} />
				<Route path="/home" element={<EvHomepage />} />
				<Route path="/partners" element={<Partners />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/EVCharge" element={<EVCharge />} />

				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
