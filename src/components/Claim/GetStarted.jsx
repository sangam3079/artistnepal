import React from "react";
import { Link } from "react-router-dom";
import { fontStyles } from "../../styles/fonts";
import { Container, ContentWrapper } from "../../styles/styles";
import SpinButton from "../Common/SpinButton";
import CardFooter from "./CardFooter";

const GetStarted = () => {
	return (
		<Container>
			<ContentWrapper>
				<h1 style={fontStyles.largeBold}>Claim an artist profile.</h1>
				<p style={fontStyles.medium}>
					If you already have music on Songs Nepal, you can get access to
					<br />
					stats, pitch tracks to our editors and more.
				</p>
				<div className="mt-1" style={fontStyles.regularMedium}>
					<Link to="/show-profile">
						<SpinButton text="CONTINUE" padding="2em" />
					</Link>
				</div>
				<CardFooter />
			</ContentWrapper>
		</Container>
	);
};

export default GetStarted;
