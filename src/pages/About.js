import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Dropmenu from "../components/Dropmenu";
import dataabout from "../assets/data/aboutdata";
import Backgroundaboutimg from "../components/Backgroundaboutimg";

const About = () => {
	const dataID = "1"; /* ne pas modifier*/
	const aboutdata = dataabout.find(
		(item) => item.id === dataID
	); /* ne pas modifier*/
	return (
		<main>
			<div className="content">
				<header>
					<Header />
				</header>
				<Backgroundaboutimg />
				{/* pour ajouter un autre champ copier coller un champ et le modifier puis le nom a la fin dans aboutdata */}
				{/* exemple <Dropmenu title={"modifier moi"} items={[aboutdata.modifiermoi]} /> */}
				<div className="aboutdropdowncontainer">
					<Dropmenu title={"Fiabilité"} items={[aboutdata.fiabilite]} />
					<Dropmenu title={"Respect"} items={[aboutdata.Respect]} />
					<Dropmenu title={"Service"} items={[aboutdata.Service]} />
					<Dropmenu title={"Sécurité"} items={[aboutdata.Sécurité]} />
				</div>
			</div>

			<footer>
				<Footer />
			</footer>
		</main>
	);
};

export default About;
