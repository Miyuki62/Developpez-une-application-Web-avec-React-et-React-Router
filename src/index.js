import React from "react";
import ReactDOM from "react-dom/client";
import Approute from "./Approute";
import "./styles/main.scss";
import "./styles/css/normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Approute />
	</React.StrictMode>
);
