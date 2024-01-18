import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Col, Form, Input, Row } from "antd";
import google from "../../assets/Icons/google-icon.png";
import fb from "../../assets/Icons/fb.png";

import logoartist from "../../assets/images/logoartist.png";
import arrowleft from "../../assets/images/arrow-left.png";

import nepalIcon from "../../assets/images/nepal (1).png";
import Password from "../../assets/Icons/password.png";

import SpinButton from "../Common/SpinButton";
//import { FB_APP_ID, GOOGLE_CLIENT_ID } from "../../constants/appConfig";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../assets/images/Logo/logo-secondary.png";
import { fontStyles } from "../../styles/fonts";
import { LoginSubTitle, LoginTitle } from "../../styles/styles";
import routes from "../../constants/routes";

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

function LoginWithPhone() {
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
							<Link to={routes.LOGIN} className="login-header-back">
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
							<LoginTitle style={fontStyles.mediumBold}>
								Lets sign you in
								<LoginSubTitle style={fontStyles.smallRegular}>
									Sign in with your phone number
								</LoginSubTitle>
							</LoginTitle>
							<div className="form">
								<Form
									{...form}
									name="artist-login"
									// onFinish={onFinish}
									// initialValues={{ remember: true }}
								>
									<div className="form-input">
										<Form.Item
											name="phone num"
											rules={[
												{
													required: true,
													message: "Please enter your phone number!",
												},
											]}
										>
											<Input
												className="custom-input"
												size="large"
												defaultValue="+977"
												placeholder="Phone Number"
												prefix={
													<img alt="flagofnepal" src={nepalIcon} height={15} />
												}
											/>
										</Form.Item>

										<Form.Item
											name="password"
											rules={[
												{
													required: true,
													message: "Please enter your password!",
												},
											]}
										>
											<Input.Password
												placeholder="Password"
												size="large"
												className="custom-input"
												prefix={<img alt="Password" src={Password} />}
											/>
										</Form.Item>
										<div
											style={{
												textDecoration: "underline",
												display: "flex",
											}}
										>
											<Link to={"/forgot-password"}>
												<p style={fontStyles.smallRegular}>
													{" "}
													Forgot your password?
												</p>
											</Link>
										</div>
										<SpinButton
											/*loading={authLoading}*/
											text="LOGIN"
											className="authLoginBtn"
										/>
									</div>
								</Form>

								<div className="social">
									<div style={fontStyles.smallRegular}>
										You can also use social login if you haven't
										<br />
										registered your account
									</div>
									<div className="social-btn">
										<div className="google-btn">
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
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
		</Col>
	);
}

export default LoginWithPhone;
