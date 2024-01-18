import React from "react";
import { Button } from "antd";
import loaderWhite from "../../assets/images/loaderWhite.png";

const SpinButton = props => {
	return (
		<Button
			shape="round"
			size="large"
			className={
				props.text === "LOGIN" || "Sign Up" ? "btn-login" : "btn-gradient"
			}
			htmlType="submit"
			disabled={props.loading}
			{...props}
		>
			{props.loading ? (
				<img src={loaderWhite} style={styles.image} alt="loader" />
			) : (
				""
			)}
			<span style={{ padding: props.padding }}>{props.text}</span>
		</Button>
	);
};

const styles = {
	image: {
		width: "20px",
		height: "20px",
		marginRight: "10px",
	},
};

export default SpinButton;
