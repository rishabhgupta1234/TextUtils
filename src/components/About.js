import React from "react";

export default function About(props) {
	// const [myStyle, setMyStyle] = useState({
	// 	color: "black",
	// 	backgroundColor: "white",
	// });
	let myStyle = {
		color: props.mode === "dark" ? "white" : "#042743",
		backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
	};

	// const [btnText, setBtnText] = useState("Change to dark mode");
	// const toggleChange = () => {
	// 	if (myStyle.color === "black") {
	// 		setMyStyle({ color: "white", backgroundColor: "black" });
	// 		setBtnText("Change to light mode");
	// 	} else {
	// 		setMyStyle({ color: "black", backgroundColor: "white" });
	// 		setBtnText("Change to dark mode");
	// 	}
	// };

	return (
		<div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
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
							aria-expanded="false"
							aria-controls="collapseOne">
							Analyze your text
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							Convert case, copy, count and many more text functions
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
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo">
							Free to use
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							Completely free to use, no need to pay
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
							Browser compatible
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							Can run on any Browser
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container">
				<button type="button" onClick={toggleChange} className="btn btn-primary my-3">
					{btnText}
				</button>
			</div> */}
		</div>
	);
}
