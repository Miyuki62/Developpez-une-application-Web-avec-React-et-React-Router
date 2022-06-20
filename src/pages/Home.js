import React from "react";
import BackgroundHomeimg from "../components/BackgroundHomeimg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
	return (
		<main>
			<div className="content">
				<header>
					<Header />
				</header>
				<BackgroundHomeimg />
				<Card />
			</div>
			<footer>
				<Footer />
			</footer>
		</main>
	);
};

export default Home;
