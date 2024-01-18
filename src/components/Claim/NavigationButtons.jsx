import React from "react";
import { fontStyles } from "../../styles/fonts";
import SpinButton from "../Common/SpinButton";
import { Link } from "react-router-dom";

const NavigationButtons = props => {
	return (
		<div style={{ ...fontStyles.regularMedium, ...styles.buttons }}>
			<Link to={props.back}>
				<SpinButton text="BACK" className="back-button" padding="2em" />
			</Link>
			{props.next ? (
				<Link to={props.next}>
					<SpinButton text={props.nextText || "NEXT"} padding="2em" />
				</Link>
			) : null}
		</div>
	);
};

const styles = {
	buttons: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		marginTop: 32,
	},
};

export default NavigationButtons;
