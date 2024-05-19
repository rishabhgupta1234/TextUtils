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
		// console.log("CopyText was clicked");
		let text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
		document.getSelection().removeAllRanges();
		// navigator.clipboard
		// 	.writeText(text.value)
		// 	.then(() => {
		// 		text.blur(); // Deselect the text by removing focus
		// 	})
		// 	.catch((err) => {
		// 		console.error("Failed to copy text: ", err);
		// 	});
	};
	const handleReverseCaseClick = () => {
		console.log("Reversecase was clicked");
		let newText = "";
		for (let i = 0; i < text.length; i++) {
			if (text[i] >= "a" && text[i] <= "z") {
				newText += text[i].toUpperCase();
			} else if (text[i] >= "A" && text[i] <= "Z") {
				newText += text[i].toLowerCase();
			} else {
				newText += " ";
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

	const removeEmpty = (arr) => {
		arr = arr.filter((a) => {
			return a.length !== 0;
		});
		return arr;
	};

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
							backgroundColor: props.mode === "dark" ? "#13466e" : "white",
							color: props.mode === "dark" ? "white" : "#042743",
						}}
						value={text}
						id="myBox"
						rows="9"></textarea>
				</div>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-1 my-1"
					onClick={handleUpperCaseClick}>
					Convert to uppercase
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-1 my-1"
					onClick={handleLowerCaseClick}>
					Convert to lowercase
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-1 my-1"
					onClick={handleClearTextClick}>
					Clear Text
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-1 my-1"
					onClick={handleReverseCaseClick}>
					Convert to reversecase
				</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
					Copy Text
				</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleinverseclick}>
					Invere Text
				</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={speak}>
					Speak Text
				</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>
					Capitalize case
				</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
					Remove Extra spaces
				</button>
			</div>
			<div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
				<h1>Your text summary</h1>
				<p>
					{removeEmpty(text.split(/\s+/g)).length} words and {text.length} character
				</p>
				<p>
					Time to read paragraph is{" "}
					{0.008 *
						text.split(/\s+/g).filter((element) => {
							return element.length !== 0;
						}).length}
				</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Nothing to preview "}</p>
			</div>
		</>
	);
}
