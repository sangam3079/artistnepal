import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Form, Input, message, Row } from "antd";
import logoartist from "../../assets/images/logoartist.png";
import arrowleft from "../../assets/images/arrow-left.png";
import Password from "../../assets/Icons/password.png";
import SpinButton from "../Common/SpinButton";
import logo from "../../assets/images/Logo/logo-secondary.png";
import { fontStyles } from "../../styles/fonts";
import { LoginSubTitle, LoginTitle } from "../../styles/styles";
import routes from "../../constants/routes";
import { useSelector } from "react-redux";
import authService from "../../services/auth";

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

function ResetPassword () {
	const history = useHistory()
	const token = useSelector(state => state.auth.resetPasswordToken)

	const resetPassword = (values) => {
		const data = {
			reset_password_token: token,
			password: values.password,
			password_confirmation: values.password_confirmation,
		}

		authService
			.updatePassword(data)
			.then((response) => {
				if (response.success) {
					message.success("Password updated successfully.");
					history.push(routes.LOGIN_EMAIL);
				} else {
					message.error(response.error || "Something went wrong");
				}
			})
			.catch((error) => {
				console.log(error);
				message.errr("Something went wrong");
			});
	}

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
							<Link to={routes.FORGOT_PASSWORD} className="login-header-back">
								<img src={arrowleft} alt="aroow left" />
								<div
									className="login-header-back-text"
									style={fontStyles.mediumRegular}
								>
									Back
								</div>
							</Link>
						</div>
						<div className="resetpassword-title">
							<LoginTitle style={{ ...fontStyles.largeBold }}>
								Reset Password
							</LoginTitle>
						</div>
						<Col className="login-form-main">
							<div className="form">
								<Form
									{...form}
									name="artist-login"
									onFinish={resetPassword}
								>
									<div className="form-input">
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
										<Form.Item
											name="password_confirmation"
											rules={[
												{
													required: true,
													message: "Please re-enter your password!",
												},
											]}
										>
											<Input.Password
												placeholder="Password Confirmation"
												size="large"
												className="custom-input"
												prefix={<img alt="Password" src={Password} />}
											/>
										</Form.Item>

										<SpinButton
											//loading={authLoading}
											text="Reset Password"
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

export default ResetPassword;
