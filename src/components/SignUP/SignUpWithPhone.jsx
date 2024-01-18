import React from "react";
import { Form, Row, Input, Col, Select, Checkbox } from "antd";
import { Link } from "react-router-dom";
import SpinButton from "../Common/SpinButton";
import { UserOutlined, InboxOutlined } from "@ant-design/icons";
import Mail from "../../assets/Icons/mail.png";
import Password from "../../assets/Icons/password.png";
import { FiPhoneCall } from "react-icons/fi";
import logoartist from "../../assets/images/logoartist.png";
import arrowleft from "../../assets/images/arrow-left.png";
import nepalIcon from "../../assets/images/nepal (1).png";
import logo from "../../assets/images/Logo/logo-secondary.png";
import { fontStyles } from "../../styles/fonts";
import { LoginSubTitle, LoginTitle } from "../../styles/styles";
import routes from "../../constants/routes";

const { Option } = Select;

const SignUpWithPhone = props => {
	const { genresLoading, genres, searchGenre, authLoading, artistSignUp } =
		props;

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

	const getSelectOptions = (
		List,
		errorMessage = "Sorry no data found",
		tags = false
	) => {
		if (List.length) {
			return (
				<>
					{List.map(item => (
						<Option value={!tags ? item.id : item.name} key={item.id}>
							{item.name || item.title || item?.profile?.name}
						</Option>
					))}
				</>
			);
		} else {
			return <Option disabled>{errorMessage}</Option>;
		}
	};

	const onFormSubmit = values => {
		artistSignUp(values);
	};
	return (
		<Col {...layout.full}>
			<div className="login-card-main">
				<Row className="justify-content-center">
					<Col {...layout.inner1}>
						<div className="login-img">
							<img className="login-logo" src={logo} alt="logo" />
						</div>
					</Col>
					<Col {...layout.inner2}>
						<div className="login-header">
							<img src={logoartist} alt="" />
							<Link to={routes.SIGNUP} className="login-header-back">
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
									Sign up with your phone number
								</LoginSubTitle>
							</LoginTitle>
							<div className="form">
								<Form
									name="artist_register"
									initialValues={{ remember: true }}
									layout="vertical"
									onFinish={onFormSubmit}
								>
									<div className="form-input">
										<Form.Item
											name="first_name"
											rules={[
												{
													required: true,
													message: "Please enter your first name",
												},
											]}
										>
											<Input
												className="custom-input"
												size="large"
												placeholder="First name"
												prefix={<UserOutlined />}
											/>
										</Form.Item>
										<Form.Item
											name="last_name"
											rules={[
												{
													required: true,
													message: "Please enter your last name",
												},
											]}
										>
											<Input
												className="custom-input"
												size="large"
												placeholder="Last name"
												prefix={<UserOutlined />}
											/>
										</Form.Item>

										<Form.Item
											name="phone_number"
											rules={[
												{
													required: true,
													message: "Please enter your contact number",
												},
											]}
										>
											<Input
												className="custom-input"
												defaultValue="+977"
												size="large"
												prefix={
													<div className="anticon">
														<img
															alt="flagofnepal"
															src={nepalIcon}
															height={15}
														/>
													</div>
												}
												placeholder="Your Contact"
											/>
										</Form.Item>

										<Form.Item
											name="password"
											rules={[
												{
													required: true,
													message: "Please enter your password!",
												},
												{
													min: 6,
													message: "Password must be atleast 6 characters long",
												},
											]}
										>
											<Input.Password
												placeholder="Password"
												size="large"
												prefix={<img alt="Password" src={Password} />}
												className="custom-input"
											/>
										</Form.Item>

										{/*  <Form.Item 
                        name="genre"
                        rules={[
                          {required:true,message:"Please Select a genre"}
                        ]}
                        >
                        <Select
                          showSearch
                          placeholder="Select your Genre"
                          className='custom-input genre-search-artist-login' 
                          size="large"
                          prefix={<InboxOutlined />}
                          
                          filterOption={false}
                          onSearch={(value)=>{
                            searchGenre(value)
                        }}>
                            {
                        genresLoading?
                        <Option disabled>Loading Genres</Option>
                        :getSelectOptions(genres,"Sorry no genres Found")
                      }   
                          </Select>
                    </Form.Item> */}
										<Form.Item
											name="remember"
											valuePropName="checked"
											wrapperCol={
												{
													/*
												offset: 8,
												span: 16,
											*/
												}
											}
										>
											<Checkbox style={fontStyles.smallRegular}>
												By signing up, I agree to Songs Nepal Terms of Use and
												Privacy policy
											</Checkbox>
										</Form.Item>
									</div>
									<Link to={routes.VERIFY_CODE}>
										{" "}
										<SpinButton
											// loading={authLoading}
											text="Sign Up"
											className="authLoginBtn"
										/>{" "}
									</Link>
								</Form>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
		</Col>
	);
};

export default SignUpWithPhone;
