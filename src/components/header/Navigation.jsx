import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<div>
				<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<div className="linktext">Accueil</div>
				</NavLink>
				<NavLink
					to="/about"
					className={(nav) => (nav.isActive ? "nav-active" : "")}
				>
					<div className="linktext">A Propos</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Navigation;
