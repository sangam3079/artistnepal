import React from "react";
import TickIcon from "../../assets/Icons/tick.svg";
import SpinButton from "../Common/SpinButton";
import { Link } from "react-router-dom";
import { fontStyles } from "../../styles/fonts";

const RequestSent = () => {
	return (
		<div className="d-flex-ac text-center">
			<div style={styles.done}>
				<img src={TickIcon} alt="Done" />
			</div>
			<div>
				<h1 style={fontStyles.largeBold}>We've got your request.</h1>
				<ul style={styles.list}>
					<li>
						Our support team will review it and send you an email within 3 days.
					</li>
					<li>Don't submit another request until you hear from us.</li>
					<li>
						If this artist account is already claimed, ask an admin on your team
						to invite you.
					</li>
				</ul>
				<div className="mt-2" style={fontStyles.regularMedium}>
					<Link to="/dashboard">
						<SpinButton text="DONE" padding="3em" />
					</Link>
				</div>
			</div>
		</div>
	);
};

const styles = {
	done: {
		background: "#D5E5FF 0% 0% no-repeat padding-box",
		borderRadius: "50%",
		height: 186,
		width: 186,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	list: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
	},
};

export default RequestSent;
