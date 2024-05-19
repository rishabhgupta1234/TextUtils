import React from "react";
// import PropTypes from "prop-types";

export default function Alerts(props) {
	const Capitalize = (word) => {
		return word[0].toUpperCase() + word.slice(1);
	};
	return (
		<div style={{ height: "50px" }}>
			{props.alert && (
				<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
					<strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
					{/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
				</div>
			)}
		</div>
	);
}
