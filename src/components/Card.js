import React from "react";
import Annonce from "../assets/json/logements.json";

const Card = () => {
	return (
		<div className="cardcontainer">
			{Annonce.annonce.map((item, i) => (
				<div className="card" key={i}>
					<img src={item.cover} alt="le logement" />
					<p>{item.title}</p>
				</div>
			))}
		</div>
	);
};

export default Card;
