import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageGallery({ pictures, title }) {
	const [count, setCount] = useState(0);
	return (
		<div className="Gallery">
			<img src={pictures[count]} alt={title} />
			{pictures.length !== 1 && (
				<button
					className="next"
					onClick={() =>
						setCount(count === pictures.length - 1 ? 0 : count + 1)
					}
				>
					<FaChevronRight className="next-icon" />
				</button>
			)}
			{pictures.length !== 1 && (
				<button
					className="prev"
					onClick={() =>
						setCount(count === 0 ? pictures.length - 1 : count - 1)
					}
				>
					<FaChevronLeft className="prev-icon" />
				</button>
			)}
		</div>
	);
}

export default ImageGallery;
