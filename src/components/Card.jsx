import React from "react";
import { NavLink } from "react-router-dom";
import Annonce from "../assets/data/logements";

const Card = () => {
	return (
		<div className="cardcontainer">
			{Annonce.map((item, i) => (
				<div key={i}>
					<div className="card">
						<NavLink
							to={{
								pathname: `/fichelogement/${item.id}`,
							}}
							id={item.id}
						>
							<img className="cardimg" src={item.cover} alt="le logement" />
							<p className="cardtxt">{item.title}</p>
						</NavLink>
					</div>
				</div>
			))}
		</div>
	);
};

export default Card;
