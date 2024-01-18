import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fontStyles } from "../../styles/fonts";
import UserImage from "../../assets/Images/Ben.png";
import NavigationButtons from "./NavigationButtons";
//import { logout } from "../../services/authService";
//import { useDispatch } from "react-redux";

const ShowProfile = () => {
	//	const dispatch = useDispatch();
	/*
	const handleLogout = () => {
		dispatch(logout());
	} */

	const [state, setState] = useState({
		name: "Judas Basnet",
		email: "Judas.basnet@gmail.com",
	});

	return (
		<div className="d-flex-ac text-center">
			<div className="artist-content-wrapper">
				<h1 style={fontStyles.largeBold}>
					Is this the right Songs Nepal account?
				</h1>
				<p style={fontStyles.medium}>
					You'll use this to log in to Songs Nepal for Artists.
				</p>
				<div className="profile-card">
					<div className="artist-circle">
						<img style={styles.image} src={UserImage} alt="Profile" />
						<p>{state.email}</p>
						<p>{state.name}</p>
					</div>
					<Link
						to="/login"
						/*onClick={handleLogout}*/
						style={fontStyles.medium}
					>
						<p className={"text-center gray"}>CHANGE ACCOUNT</p>
					</Link>
				</div>
				<NavigationButtons back="/claim" next="/profile-search" />
			</div>
		</div>
	);
};

const styles = {
	image: {
		height: 160,
		width: 160,
	},
};

export default ShowProfile;
