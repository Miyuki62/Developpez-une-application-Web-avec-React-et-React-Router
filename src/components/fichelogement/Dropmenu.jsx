import React from "react";
import { useParams } from "react-router-dom";
import Jsonextractor from "../utils/Jsonextractor";

const Dropmenu = () => {
	const { annonceid } = useParams();
	return (
		<div className="dropdown_container">
			<Jsonextractor />
			<button type="button" className="dropdownbutton">
				test
				<i className="fa fa-angle-down fa-2x fleche-ingredients"></i>
			</button>
			<div className="dropdown">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ab, sit
					unde, odio sed fuga veniam voluptates amet nulla sunt animi nam
					laudantium laborum labore natus autem excepturi iusto rem, beatae ut.
					Molestiae consequatur eaque expedita dolorum ipsam? Numquam, earum? In
					praesentium natus possimus laboriosam atque reprehenderit modi
					voluptate consequuntur ipsum alias dignissimos, earum nesciunt
					incidunt cumque, tenetur autem! Voluptatibus aut mollitia rem nobis
					quidem inventore? Dolore sit laudantium quidem aut vero a, assumenda
					ad voluptatum inventore obcaecati, molestiae numquam! Veritatis
					doloribus ex vitae distinctio dicta accusantium culpa ea!
					Exercitationem tenetur numquam non quam cumque incidunt praesentium
					aperiam ipsam? Nam?
				</p>
				<h1>id : {annonceid}</h1>
			</div>
		</div>
	);
};

export default Dropmenu;
