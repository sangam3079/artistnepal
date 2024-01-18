import React from "react";
import { Link } from "react-router-dom";
import { fontStyles } from "../../styles/fonts";
import UserImage from "../../assets/Images/Ben.png";
import NavigationButtons from "./NavigationButtons";
import { FiLock } from "react-icons/fi";
import { Container } from "../../styles/styles.js";

const ArtistProfile = props => {
	return (
		<Container>
			<div className="artist-content-wrapper">
				<div className="artist-circle" style={{ position: "relative" }}>
					<img style={styles.image} src={UserImage} alt="Profile" />
					<FiLock style={styles.lock} />
					<div style={fontStyles.mediumBold}>Judas Basnet</div>
				</div>

				<Link to={"/change-account"}>
					<p className="text-center black text-underline mb-1">
						Listen on Songs Nepal
					</p>
				</Link>
				<div style={fontStyles.medium}>
					This artist profile has already been claimed.
					<br />
					Ask your team to invite you to Songs Nepa for Artists.
				</div>
				<Link to={"/change-account"} style={fontStyles.medium}>
					<p className="text-center black text-underline mt-2">
						Can't Reach your team?
					</p>
				</Link>
				<NavigationButtons
					back="/profile-search"
					next="/access-account"
					nextText="LEARN MORE"
				/>
			</div>
		</Container>
	);
};

const styles = {
	image: {
		height: 160,
		width: 160,
		marginBottom: 20,
		opacity: 0.3,
	},
	lock: {
		color: "#FFFFFF",
		position: "absolute",
		top: "34%",
		fontSize: "25px",
		left: "48%",
	},
};

export default ArtistProfile;
