import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Composants from "./pages/Composants";
import Error404 from "./pages/Error404";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/fiche-logement" element={<FicheLogement />} />
				<Route path="/composants" element={<Composants />} />
				<Route path="/about" element={<About />} />
				{/* path="*" fonctionne si l'url n'est pas bonne */}
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
