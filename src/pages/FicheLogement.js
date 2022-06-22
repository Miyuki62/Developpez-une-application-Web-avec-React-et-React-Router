import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error404componant from "../components/Error404Componant";
import ImageGallery from "../components/ImageGallery";
import Note from "../components/Note";
import Tags from "../components/Tags";
import Annonce from "../assets/data/logements";
import { useParams } from "react-router-dom";
import Dropmenu from "../components/Dropmenu";

const FicheLogement = () => {
	const { annonceid } = useParams();
	const logementID = annonceid;
	const currentLogement = Annonce.find((item) => item.id === logementID);

	if (!currentLogement) {
		return <Error404componant />;
	}
	const descriptionTitle = "Description";
	const equipmentTitle = "Équipements";

	return (
		<main>
			<div className="content">
				<header>
					<Header />
				</header>
				<ImageGallery
					pictures={currentLogement.pictures}
					title={currentLogement.title}
				></ImageGallery>
				<div className="fiche-logement-container">
					<div className="user-profil">
						<div className="username-img">
							<img
								src={currentLogement.host.picture}
								alt={currentLogement.title}
							/>
							<h3>{currentLogement.host.name}</h3>
						</div>
					</div>
					<div className="logementtexte">
						<h2>{currentLogement.title}</h2>
						<p>{currentLogement.location}</p>
					</div>
				</div>
				<div className="noteAndtags">
					<Tags tags={currentLogement.tags} />
					<Note note={currentLogement.rating} />
				</div>
				<div className="Dropmenu-container">
					<Dropmenu
						title={descriptionTitle}
						items={[currentLogement.description]}
					/>
					<Dropmenu title={equipmentTitle} items={currentLogement.equipments} />
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</main>
	);
};
export default FicheLogement;
