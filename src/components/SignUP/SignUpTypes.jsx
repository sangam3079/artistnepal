import React from "react";
import { Link } from "react-router-dom";
import infoImg from "../../assets/images/1.png";
import { fontStyles } from "../../styles/fonts";
import routes from "../../constants/routes";
import AuthLayout from "../Layouts/AuthLayout";

function SignUpTypes() {
	return (
		<AuthLayout>
			<div className="signup-type-container">
				<div className="main">
					<div className="title">
						<p style={fontStyles.largeBold}>Get Songs Nepal For Artist</p>
						<p  className="textField" style={fontStyles.medium}>
						Tell us who you are.
					</p>
					</div>
					
					<div className="cards">
					  <Link to={routes.SIGNUP_EMAIL} className="signupType-card-for-artist">
							<div>
									<div className="info">
										<img src={infoImg} alt="info background" />
										<div className="infoText">
											<p style={fontStyles.mediumSemiBold}>Artist or Manager</p>
										</div>
									</div>
							</div>
						</Link>
						<Link to={routes.COMPANY_SIGNUP} className="signupType-card-for-musicCompany">
							<div>
									<div className="info">
										<img src={infoImg} alt="info background" />
										<div className="infoText">
											<p style={fontStyles.mediumSemiBold}>Music Company</p>
										</div>
									</div>
							</div>
						</Link>
					</div>
					<Link to={"/"} style={fontStyles.medium}>
						<p className="linkFooter">Not sure which to choose?</p>
					</Link>
				</div>
			</div>
		</AuthLayout>
	);
}

// const styles = {
// 	image: {
// 		height: 180,
// 		width: 170,
// 		marginBottom: 20,
// 		opacity: 0.9,
// 	},
// };

export default SignUpTypes;
