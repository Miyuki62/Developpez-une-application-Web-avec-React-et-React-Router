import React from "react";
import BackgroundHomeimg from "../components/BackgroundHomeimg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<div className="content">
				<BackgroundHomeimg />
				<Card />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
