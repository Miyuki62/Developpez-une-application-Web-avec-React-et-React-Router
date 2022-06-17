import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { NavLink } from "react-router-dom";

const Error404 = () => {
	return (
		<div>
			<div className="content">
				<header>
					<Header />
				</header>
				<h1 className="Error404">404</h1>
				<p className="Error404text">
					Oups! La page que vous demandez n'existe pas.
				</p>
				<NavLink to="/">
					<p className="Error404link">Retourner sur la page d’accueil</p>
				</NavLink>
			</div>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Error404;
