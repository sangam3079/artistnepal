import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Col, Row } from "antd";
import logoartist from "../../assets/images/logoartist.png";
import arrowleft from "../../assets/images/arrow-left.png";
import SpinButton from "../Common/SpinButton";
import logo from "../../assets/images/Logo/logo-secondary.png";
import { fontStyles } from "../../styles/fonts";
import { LoginTitle } from "../../styles/styles";
import routes from "../../constants/routes";
import google from "../../assets/Icons/google-icon.png";
import fb from "../../assets/Icons/fb.png";

const layout = {
	full: {
		xxl: { span: 16, offset: 4 },
		xl: { span: 20, offset: 2 },
		lg: { span: 20, offset: 2 },
		md: { span: 22, offset: 1 },
		sm: { span: 24, offset: 0 },
		xs: { span: 24, offset: 0 },
	},

	inner1: {
		xxl: { span: 10 },
		xl: { span: 10 },
		lg: { span: 10 },
		md: { span: 8 },
		sm: { span: 0 },
		xs: { span: 0 },
	},
	inner2: {
		xxl: { span: 14 },
		xl: { span: 14 },
		lg: { span: 14 },
		md: { span: 16 },
		sm: { span: 24 },
		xs: { span: 24 },
	},
};

const form = {
	wrapperCol: { span: 24 },
};
const Login = props => {
	return (
		<Col {...layout.full}>
			<div className="login-card-main">
				<Row>
					<Col {...layout.inner1}>
						<div className="login-img">
							<img className="login-logo" src={logo} alt="logo" />
						</div>
					</Col>
					<Col {...layout.inner2}>
						<div className="login-header">
							<img src={logoartist} alt="" />
							<Link to="/" className="login-header-back">
								<img src={arrowleft} alt="aroow left" />
								<div
									className="login-header-back-text"
									style={fontStyles.mediumRegular}
								>
									Back
								</div>
							</Link>
						</div>
						<Col className="login-form-main">
							<div className="artist-login-div">
								<LoginTitle style={fontStyles.mediumBold}>
									Lets sign you in
								</LoginTitle>
								{/* <div className="button-container"> */}
								{/* <Link
										to={routes.LOGIN_PHONE}
										className="phone-login-btn"
										style={fontStyles.normalLight}
									>
										Continue with phone number
									</Link> */}

								<Link
									to={routes.LOGIN_EMAIL}
									className="email-login-btn"
									style={fontStyles.normalLight}
								>
									Continue with email
								</Link>
								{/* <div className="google-btn">
										<img src={google} alt="google" />
										<div
											style={{
												...fontStyles.normalLight,
												color: "red",
												marginLeft: "1rem",
											}}
										>
											Log in with Google
										</div>
									</div>
									<div className="fb-btn">
										<img src={fb} alt="fb" />
										<div
											style={{
												...fontStyles.normalLight,
												color: "blue",
												marginLeft: "1.2rem",
											}}
										>
											Log in with Facebook
										</div>
									</div> */}
								{/* </div> */}

								<div className="login-footerLink" style={fontStyles.normal}>
									<div className="login-footerLink-text">
										Don't have an account?
									</div>
									<Link to={routes.SIGNUP_TYPE}>Sign up</Link>
								</div>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
		</Col>
	);
};

export default withRouter(Login);
