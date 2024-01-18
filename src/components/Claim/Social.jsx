import React, { useState } from "react";
import { fontStyles } from "../../styles/fonts";
import UserImage from "../../assets/Images/Ben.png";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { Form, Input } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import NavigationButtons from "./NavigationButtons";

const Social = () => {
	const [state, setState] = useState({
		instagram: "",
		twitter: "",
		website: "",
		termsAndCondition: false,
	});

	const userInfo = {
		name: "Judas Basnet",
		image: UserImage,
	};

	return (
		<div className="d-flex-ac text-center">
			<div className="artist-content-wrapper">
				<div className="artist-circle">
					<img style={styles.image} src={userInfo.image} alt="Profile" />
					<div style={fontStyles.mediumBold}>{userInfo.name}</div>
				</div>
				<div style={fontStyles.medium}>
					<p
						className="text-center mt-1"
						style={{ textTransform: "uppercase", color: "#585858" }}
					>
						info required
					</p>
					<p>Paste link to your social profile.</p>
				</div>
				<Form className="custom-form mr-1 mb-1">
					<Form.Item>
						<div className="display-flex align-items-center gap">
							<FaInstagram />
							<span>Instagram</span>
						</div>
						<Input
							size="large"
							value={state.instagram}
							style={styles.input}
							onChange={e => setState({ ...state, instagram: e.target.value })}
							placeholder="Link to instagram"
						/>
					</Form.Item>

					<Form.Item>
						<div className="display-flex align-items-center gap">
							<FaTwitter />
							<span>Twitter</span>
						</div>
						<Input
							size="large"
							value={state.twitter}
							style={styles.input}
							onChange={e => setState({ ...state, twitter: e.target.value })}
							placeholder="Link to twitter"
						/>
					</Form.Item>

					<Form.Item>
						<div className="display-flex align-items-center">
							Or, paste a link to the artist's website.
						</div>
						<Input
							size="large"
							value={state.website}
							style={styles.input}
							onChange={e => setState({ ...state, website: e.target.value })}
							placeholder="Link to artist website"
						/>
					</Form.Item>
					<Form.Item>
						<Checkbox
							value={state.termsAndCondition}
							onChange={() =>
								setState({
									...state,
									termsAndCondition: !state.termsAndCondition,
								})
							}
						>
							I agree to Songs Nepal Terms of Use and Privacy policy
						</Checkbox>
					</Form.Item>
				</Form>
				<NavigationButtons back="/artist-info-verify" next="/request-sent" />
			</div>
		</div>
	);
};

const styles = {
	image: {
		height: 160,
		width: 160,
	},
	input: {
		border: "2px solid #A4AEB1",
		marginTop: 10,
	},
};

export default Social;
