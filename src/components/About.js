import React, { useState } from "react";

export default function About() {
	const [myStyle, setMyStyle] = useState({
		color: "black",
		backgroundColor: "white",
	});
	const [btnText, setBtnText] = useState("Change to dark mode");
	const toggleChange = () => {
		if (myStyle.color === "black") {
			setMyStyle({ color: "white", backgroundColor: "black" });
			setBtnText("Change to light mode");
		} else {
			setMyStyle({ color: "black", backgroundColor: "white" });
			setBtnText("Change to dark mode");
		}
	};

	return (
		<div className="container" style={myStyle}>
			<h2 className="my-2">About Us</h2>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							style={myStyle}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne">
							Accordion Item #1
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							This is about1
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							style={myStyle}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree">
							Accordion Item #2
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							This is about2
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<button type="button" onClick={toggleChange} className="btn btn-primary my-3">
					{btnText}
				</button>
			</div>
		</div>
	);
}
