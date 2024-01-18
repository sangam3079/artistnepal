import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fontStyles } from "../../styles/fonts";
import UserImage from "../../assets/Images/Ben.png";
import NavigationButtons from "./NavigationButtons";

const InfoNext = () => {
	const [state, setState] = useState({
		name: "James Taylor",
	});
	return (
		<div className="d-flex-ac text-center">
			<div className="artist-content-wrapper">
				<div className="artist-circle">
					<img style={styles.image} src={UserImage} alt="Profile" />
					<div style={fontStyles.mediumBold}>{state.name}</div>
				</div>
				<div style={fontStyles.medium}>
					<p
						className="text-center  mt-1"
						style={{ textTransform: "uppercase", color: "#585858" }}
					>
						info required
					</p>
				</div>
				<div style={fontStyles.medium}>
					verify that you are part of this team.
					<br />
					Connect to the artist's social media accounts.
					<br />
					we'll use this to verify your account.
				</div>
				<Link to={"/change-account"} style={fontStyles.medium}>
					<p className="text-center black text-underline mt-2">
						or, ask an admin on your team to invite you.
					</p>
				</Link>
				<NavigationButtons back="/artist-info" next="/social" />
			</div>
		</div>
	);
};

const styles = {
	image: {
		height: 160,
		width: 160,
		marginBottom: 20,
	},
};

export default InfoNext;
