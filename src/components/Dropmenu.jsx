import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Dropdown({ title, items }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="Dropdown">
			<button className="Dropdown-title" onClick={() => setIsOpen(!isOpen)}>
				{title}
				<FaChevronDown
					className={`Dropdown-btn  ${isOpen ? `Dropdown-btn-open` : ""}`}
				/>
			</button>
			{isOpen && (
				<div className="Dropdown-content">
					<ul>
						{items.map((element, index) => (
							<li key={index}>{element}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
export default Dropdown;
