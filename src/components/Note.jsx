import React from "react";
import { FaStar } from "react-icons/fa";

function Note({ note }) {
	const etoile = [1, 2, 3, 4, 5];

	return (
		<div className="note">
			{etoile.map((index) => (
				<FaStar
					key={index}
					className={`etoile ${index <= Note ? "color" : ""}`}
				/>
			))}
		</div>
	);
}

export default Note;
