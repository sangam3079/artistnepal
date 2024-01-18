import React, { useState } from "react";
import { fontStyles } from "../../styles/fonts";
import NavigationButtons from "./NavigationButtons";
import { Input } from "antd";

const TeamAccountEmail = () => {
	const [email, setEmail] = useState("");

	return (
		<div className="d-flex-ac text-center">
			<div className="artist-content-wrapper">
				<div style={{ marginBottom: 96 }}>
					<h1 style={fontStyles.largeBold}>
						What's your business email address?
					</h1>
					<p style={fontStyles.medium}>
						Make sure you enter the email associated with the team you want
						<br />
						to create.
					</p>
					<span
						className="custom-form custom-form--margin-1 mb-1 display-flex"
						style={{ maxWidth: 385, margin: "0px auto" }}
					>
						<Input
							value={email}
							placeholder="Enter your business email address"
							onChange={e => setEmail(e.target.value)}
						/>
					</span>
				</div>
				<NavigationButtons
					back="/profile-search"
					next={email.length > 0 ? "/verify-email" : "/access-account"}
				/>
			</div>
		</div>
	);
};

export default TeamAccountEmail;
