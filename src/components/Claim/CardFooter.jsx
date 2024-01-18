import React from "react";
import { Link } from "react-router-dom";
import { fontStyles } from "../../styles/fonts";

const CardFooter = () => {
	return (
		<div className={"section-break-1 mb-0"} style={fontStyles.medium}>
			<Link to={"/"}>
				<p className={"text-center text-underline black"}>
					{" "}
					Music not yet live?
				</p>
			</Link>

			<Link to={"/"}>
				<p className={"text-center text-underline black"}>
					{" "}
					Are you a part of label team?
				</p>
			</Link>
		</div>
	);
};

export default CardFooter;
