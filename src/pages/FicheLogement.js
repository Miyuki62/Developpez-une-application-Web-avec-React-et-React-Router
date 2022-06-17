import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
//import Annonce from "../assets/json/logements.json";
import { useParams } from "react-router-dom";
import Dropmenu from "../components/fichelogement/Dropmenu";

const FicheLogement = () => {
	//récupère l'id dans l'url
	const { annonceid } = useParams();
	return (
		<div>
			<div className="content">
				<header>
					<Header />
				</header>
				<h1>Fiche logement</h1>
				<h1>id : {annonceid}</h1>
				<Dropmenu />
			</div>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default FicheLogement;
