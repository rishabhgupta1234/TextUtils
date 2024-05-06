import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpperCaseClick = () => {
		console.log("Uppercase was clicked");
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to uppercase", "success");
	};
	const handleLowerCaseClick = () => {
		console.log("Lowercase was clicked");
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to lowercase", "success");
	};
	const handleinverseclick = () => {
		console.log("inverse click is triggered");
		let newtext = "";
		for (let i = text.length - 1; i >= 0; i--) {
			newtext += text[i];
		}
		setText(newtext);
	};
	const handleCapitalize = () => {
		let newText = text
			.split(" ")
			.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
			.join(" ");
		setText(newText);
	};
	const handleClearTextClick = () => {
		console.log("ClearText was clicked");
		let newText = "";
		setText(newText);
	};
	const handleExtraSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
	};
	const handleCopyText = () => {
		console.log("CopyText was clicked");
		let text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
	};
	const handleReverseCaseClick = () => {
		console.log("Reversecase was clicked");
		let newText = "";
		for (let i = 0; i < text.length; i++) {
			if (text[i] >= "a" && text[i] <= "z") {
				newText += text[i].toUpperCase();
			} else if (text[i] >= "A" && text[i] <= "Z") {
				newText += text[i].toLowerCase();
			}
		}

		setText(newText);
	};
	const speak = () => {
		let msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
	};
	const handleOnChange = (event) => {
		console.log("On Change");
		setText(event.target.value);
	};
	const [text, setText] = useState("");

	return (
		<>
			<div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					{/* <label for="myBox">Comments</label> */}
					<textarea
						className="form-control"
						onChange={handleOnChange}
						placeholder="Enter text here"
						style={{
							backgroundColor: props.mode === "dark" ? "grey" : "white",
							color: props.mode === "dark" ? "white" : "#042743",
						}}
						value={text}
						id="myBox"
						rows="9"></textarea>
				</div>
				<button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>
					Convert to uppercase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>
					Convert to lowercase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleClearTextClick}>
					Clear Text
				</button>
				<button className="btn btn-primary mx-1" onClick={handleReverseCaseClick}>
					Convert to reversecase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleCopyText}>
					Copy Text
				</button>
				<button className="btn btn-primary mx-1" onClick={handleinverseclick}>
					Invere Text
				</button>
				<button className="btn btn-primary mx-1" onClick={speak}>
					Speak Text
				</button>
				<button className="btn btn-primary mx-1" onClick={handleCapitalize}>
					Capitalize case
				</button>
				<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
					Remove Extra spaces
				</button>
			</div>
			<div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
				<h1>Your text summary</h1>
				<p>
					{text.split(" ").length} words and {text.length} character
				</p>
				<p>Time to read paragraph is {Math.ceil(text.split(" ").length * 0.008)} minutes</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Please write something to review"}</p>
			</div>
		</>
	);
}
