import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import artistProfile from "../../assets/Images/Ben.png";
import NavigationButtons from "./NavigationButtons";

const layout = {
	full: {
		xxl: { span: 16, offset: 4 },
		xl: { span: 20, offset: 2 },
		lg: { span: 20, offset: 2 },
		md: { span: 22, offset: 1 },
		sm: { span: 24, offset: 0 },
		xs: { span: 24, offset: 0 },
	},
};

const form = {
	wrapperCol: { span: 24 },
};

const Information = () => {
	const [form] = Form.useForm();

	return (
		<div {...layout.full} className="infoPage">
			<div className="infoPage-profile artist-content-wrapper">
				<div>Tell us about yourself.</div>
				<div className="infoPage-profile-details">
					<img src={artistProfile} alt="profile pic" />
					<div className="infoPage-profile-details-content">
						<div className="infoPage-profile-details-content-name">
							James Taylor
						</div>
						<div className="infoPage-profile-details-content-rest">
							<div className="infoPage-profile-details-content-rest-company">
								SONGS NEPAL ACCOUNT
							</div>
							<div className="infoPage-profile-details-content-rest-email">
								james.taylor@gmail.com
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="infoPage-main">
				<Form form={form} layout="vertical">
					<div layout="inline" className="infoPage-main-form">
						<div className="formItem">
							<Form.Item
								label="First Name"
								required
								rules={[
									{ required: true, message: "Please enter your first name" },
								]}
							>
								<div className="formInput">
									<Input
										size="large"
										placeholder="first name"
										bordered={false}
									/>
								</div>
							</Form.Item>
						</div>
						<div className="formItem">
							<Form.Item
								label="Last Name"
								required
								rules={[
									{ required: true, message: "Please enter your last name!" },
								]}
							>
								<div className="formInput">
									<Input
										className="infoPage-input"
										size="large"
										placeholder="last name"
										bordered={false}
									/>
								</div>
							</Form.Item>
						</div>
					</div>
					<div layout="inline" className="infoPage-main-form">
						<div className="formItem">
							<Form.Item label="Business Email">
								<div className="formInput">
									<Input
										className="infoPage-input"
										size="large"
										placeholder="email"
										bordered={false}
									/>
								</div>
							</Form.Item>
						</div>
						<div className="formItem">
							<Form.Item
								label="Role"
								required
								rules={[{ required: true, message: "" }]}
							>
								<div className="formInput">
									<Input
										className="infoPage-input"
										size="large"
										placeholder="your role"
										bordered={false}
									/>
								</div>
							</Form.Item>
						</div>
					</div>
					<div className="infoPage-main-form">
						<div className="formItem">
							<Form.Item label="Company">
								<div className="formInput">
									<Input
										className="infoPage-input"
										size="large"
										placeholder="your company"
										bordered={false}
									/>
								</div>
							</Form.Item>
						</div>
					</div>
				</Form>
			</div>
			<div className="infoPage-navBtn">
				<NavigationButtons
					back="/verify-email"
					next="/artist-info-verify"
					nextText="NEXT"
				/>
			</div>
		</div>
	);
};

export default Information;
