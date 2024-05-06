import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alerts from "./components/Alerts";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);
	// const [modeBtnText, setModeBtnText] = useState("black");
	const [modeText, setModeText] = useState("Enable DarkMode ");
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			// setModeBtnText("light");
			setModeText("Enable LightMode");
			document.body.style.backgroundColor = "#042743";
			showAlert("Dark mode has been enabled", "success");
			document.title = "TextUtils - DarkMode";
			setInterval(() => {
				document.title = "TextUtils is Amazing";
			}, 2000);
		} else {
			setMode("light");
			// setModeBtnText("dark");
			setModeText("Enable DarkMode");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode has been enabled", "success");
			document.title = "TextUtils - LightMode";
		}
	};
	return (
		<>
			<Router>
				<Navbar
					mode={mode}
					// modeBtnText={modeBtnText}
					modeText={modeText}
					toggleMode={toggleMode}
					title="TextUtils"
					aboutText="About Us"
				/>
				<Alerts alert={alert} />
				<div className="container my-3">
					<Routes>
						<Route
							exact
							path="/"
							element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}
						/>
						<Route exact path="/about" element={<About />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
