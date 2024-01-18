import React, { useState } from "react";
import { fontStyles } from "../../styles/fonts";
import NavigationButtons from "./NavigationButtons";
import { Input } from "antd";

const EmailVerification = () => {
	const [code, setCode] = useState("");
	const [email, setEmail] = useState("judas@gmail.com");

	return (
		<div className="d-flex-ac text-center">
			<div className="artist-content-wrapper">
				<div style={{ marginBottom: 96 }}>
					<h1 style={fontStyles.largeBold}>Check your email</h1>
					<p style={fontStyles.medium}>
						We sent a six-digit code to {email}. Copy and
						<br />
						paste the code below to continue.
					</p>
					<span
						className="custom-form custom-form--margin-1 mb-1 d-flex-ac"
						style={{ maxWidth: 385, margin: "0px auto" }}
					>
						<Input
							value={code}
							placeholder="Six digit code"
							onChange={e => setCode(e.target.value)}
						/>
					</span>
					<p style={{ color: "#888888" }}>
						Once you enter your code, you'll have 30 minutes to finish getting
						access.
					</p>
				</div>
				<NavigationButtons
					back="/profile-search"
					next={code.length === 6 ? "/artist-info" : null}
				/>
			</div>
		</div>
	);
};

export default EmailVerification;
