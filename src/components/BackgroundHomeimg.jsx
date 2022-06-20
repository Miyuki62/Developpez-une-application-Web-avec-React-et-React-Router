import React from "react";
import backgroundhome from "../assets/img/backgroundhome.png";

const BackgroundHomeimg = () => {
	return (
		<div className="backgroundHomeimg">
			<img src={backgroundhome} alt="paysage montagneux au bord de mer" />
			<h1>Chez vous, partout et ailleurs</h1>
		</div>
	);
};

export default BackgroundHomeimg;
