import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../../assets/images/Logo/logo.svg";
import { Box } from "../../styles/custom";
import Logo from "../../assets/images/Logo/logo.svg";
import Footer from "./Footer";
import { fontStyles } from "../../styles/fonts";
import routes from "../../constants/routes";

const AuthLayout = props => {
	const LogoHeader = () => {
		return (
			<Box padding="20px 80px" justifyContent="space-between" flexWrap="wrap">
				<Link to="/">
					<img src={Logo} alt="Songs Nepal" width="100%" />{" "}
				</Link>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						textColor: "black",
					}}
				>
					<div style={fontStyles.mediumRegular}>Already a part of team?</div>{" "}
					<div style={fontStyles.medium}>
						<Link
							to={routes.LOGIN_EMAIL}
							style={{ color: "black", marginLeft: "5px" }}
						>
							Login
						</Link>
					</div>
				</div>
			</Box>
		);
	};

	return (
		<div>
			<LogoHeader />
			{props.children}
			<Footer />
		</div>
	);
};

export default AuthLayout;
