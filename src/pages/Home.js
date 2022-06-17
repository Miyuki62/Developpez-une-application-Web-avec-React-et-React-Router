import React from "react";
import BackgroundHomeimg from "../components/home/BackgroundHomeimg";
import Card from "../components/home/Card";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Home = () => {
	return (
		<div>
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
		</div>
	);
};

export default Home;
