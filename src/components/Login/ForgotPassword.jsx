import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Col, Form, Input, message, Row } from "antd";
import logoartist from "../../assets/images/logoartist.png";
import arrowleft from "../../assets/images/arrow-left.png";
import Mail from "../../assets/Icons/mail.png";
import SpinButton from "../Common/SpinButton";
import logo from "../../assets/images/Logo/logo-secondary.png";
import { fontStyles } from "../../styles/fonts";
import { LoginSubTitle, LoginTitle } from "../../styles/styles";
import routes from "../../constants/routes";
import { useDispatch } from "react-redux";
import authActions from "../../services/actions/auth";

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


function ForgotPassword () {
	const dispatch = useDispatch()
	const history = useHistory()

	const onFormSubmit = (values) => {
		dispatch(authActions.requestNewPassword(values.email))
			.then((response) => {
				if (response.success) {
					message.success("Password reset link was sent to the given email");
					history.push(routes.RESET_PASSWORD_VERIFICATION_CODE)
				} else {
					message.error(response.error || "Something went wrong");
				}
			})
			.catch((error) => {
				console.log(error);
				message.error("Something went wrong");
			});
	}
	return (
		<Col {...layout.full}>
			<div className="login-card-main">
				<Row>
					<Col {...layout.inner1}>
						<div className="login-img">
							<div className="login-img-content">
								<div className="login" style={fontStyles.largeSemiBold}>
									Forgot Password?
								</div>
								<div className="login-sec" style={fontStyles.mediumLight}>
									Enter your registered email and we will guide you through your
									mail.
								</div>
							</div>
						</div>
					</Col>
					<Col {...layout.inner2}>
						<div className="login-header">
							<img src={logoartist} alt="" />
							<Link to={routes.LOGIN_EMAIL} className="login-header-back">
								<img src={arrowleft} alt="aroow left" />
								<div
									className="login-header-back-text"
									style={fontStyles.mediumRegular}
								>
									Back
								</div>
							</Link>
						</div>
						<div className="forgotpassword-title">
							<LoginTitle style={{ ...fontStyles.largeBold }}>Forgot Password!</LoginTitle>
						</div>
						<Col className="login-form-main">
							<div className="form">
								<Form
									{...form}
									name="artist-login"
									onFinish={onFormSubmit}
								// initialValues={{ remember: true }}
								>
									<div className="form-input">
										<Form.Item
											name="email"
											rules={[
												{
													required: true,
													message: "Please enter your mail address!",
												},
											]}
										>
											<Input
												className="custom-input"
												size="large"
												placeholder="Your Email Address"
												prefix={<img alt="Mail" src={Mail} />}
											/>
										</Form.Item>

										<SpinButton
											//loading={authLoading}
											text="Submit"
											className="authLoginBtn"
										/>
									</div>
								</Form>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
		</Col>
	);
}

export default ForgotPassword;
