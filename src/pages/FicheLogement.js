import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FicheLogement = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<div className="content">
				<h1>Fiche logement</h1>
			</div>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default FicheLogement;
