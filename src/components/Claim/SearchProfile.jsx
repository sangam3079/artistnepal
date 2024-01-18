import React, { useState } from "react";
import { fontStyles } from "../../styles/fonts";
import { Input } from "antd";
import { BsSearch } from "react-icons/bs";
import UserImage from "../../assets/Images/Ben.png";
import { useHistory } from "react-router-dom";
import NavigationButtons from "./NavigationButtons";

const SearchProfile = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const history = useHistory();
	const [results, setResults] = useState([
		{
			name: "James",
			image: UserImage,
		},
		{
			name: "Jessie",
			image: UserImage,
		},
	]);

	const visitProfile = () => {
		history.push("/artist-profile");
	};

	const searchResults = () => {
		return (
			<div style={styles.searchResults}>
				{results.map(result => {
					return (
						<div style={styles.profileDiv} onClick={visitProfile}>
							<img style={styles.image} src={result.image} alt="Profile" />
							<span>{result.name}</span>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div className="d-flex-ac text-center" style={{ position: "relative" }}>
			<div className="artist-content-wrapper">
				<div style={{ marginBottom: 96 }}>
					<h1 style={fontStyles.largeBold}>What profile are you claiming?</h1>
					<p style={fontStyles.medium}>
						Only claim 1 profile at a time and wait until you get access before
						<br />
						claiming another.
					</p>
					<span
						className="custom-form custom-form--margin-1 mr-1 mb-1"
						style={{ maxWidth: 385, margin: "0px auto" }}
					>
						<Input
							prefix={<BsSearch style={styles.icon} />}
							placeholder="Search for an artist"
							onChange={e => setSearchQuery(e.target.value)}
						/>
						{searchQuery.length > 0 ? searchResults() : null}
					</span>
				</div>
				<NavigationButtons back="/show-profile" />
			</div>
		</div>
	);
};

const styles = {
	icon: {
		color: "#A4AEB1",
	},
	searchResults: {
		backgroundColor: "#ffffff",
		borderRadius: 19,
		padding: 10,
		width: "inherit",
		border: "1px solid #A4AEB1",
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	profileDiv: {
		display: "flex",
		paddingBottom: 10,
		alignItems: "center",
		gap: 10,
		cursor: "pointer",
	},
	image: {
		borderRadius: "50%",
		height: 63,
		width: 63,
	},
};
export default SearchProfile;
