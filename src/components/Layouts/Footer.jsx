import React from "react";
import Logo from "../../assets/images/Logo/logo-secondary.png";
import {
	FaGooglePlay,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaAppStore,
} from "react-icons/fa";
import { Button } from "antd";
import { Box } from "../../styles/custom";
import { fontStyles } from "../../styles/fonts";

const Footer = () => {
	return (
		<div style={styles.footer}>
			<div style={styles.appInfoContainer}>
				<div style={styles.logo}></div>
				<div style={styles.appInfo}>
					<div style={styles.header}>ABOUT SONGS NEPAL</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							style={styles.nonAnchorStyle}
							href="#"
						>
							About Us
						</a>
					</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							style={styles.nonAnchorStyle}
							href="#"
						>
							Advertise On Songs Nepal
						</a>
					</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							style={styles.nonAnchorStyle}
							href="#"
						>
							Contact
						</a>
					</div>
				</div>
				<div>
					<div style={styles.header}>HELPFUL LINKS</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							style={styles.nonAnchorStyle}
							href="#"
						>
							Plans
						</a>
					</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							style={styles.nonAnchorStyle}
							href="#"
						>
							Help
						</a>
					</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							style={styles.nonAnchorStyle}
							href="#"
						>
							Downloads
						</a>
					</div>
				</div>
				<div>
					<div style={styles.header}>GET OUR APP</div>
					<div style={styles.downloadIcons}>
						<div style={styles.downloadIcon}>
							<a
								target="_blank"
								rel="noreferrer noopener"
								//style={styles.nonAnchorStyle}
								href="https://apps.apple.com/np/app/songs-nepal/id1550050865"
							>
								<Button style={styles.button} shape="round" size="large">
									<FaAppStore style={{ color: "#4D34F9", marginRight: 5 }} />
									<span>
										<b style={fontStyles.normalLight}>Get it on</b>
										{"   "}
										<b style={fontStyles.normalBold}>App store</b>
									</span>
								</Button>
							</a>
						</div>
						<div style={styles.downloadIcon}>
							<a
								target="_blank"
								rel="noreferrer noopener"
								//	style={styles.nonAnchorStyle}
								href="https://play.google.com/store/apps/details?id=com.np.songs_nepal"
							>
								<Button shape="round" size="large" style={styles.button}>
									<FaGooglePlay style={{ color: "#4D34F9", marginRight: 5 }} />
									<span>
										<b style={fontStyles.normalLight}>Get it on</b>
										{"   "}
										<b style={fontStyles.normalBold}>Play store</b>
									</span>
								</Button>
							</a>
						</div>
					</div>
				</div>
				<div style={styles.socialIcons}>
					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							href="https://www.facebook.com/SongsNepal"
						>
							<FaFacebookF style={styles.icon} />
						</a>
					</div>

					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							href="https://twitter.com/SongsNepal"
						>
							<FaTwitter style={styles.icon} />
						</a>
					</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer noopener"
							href="https://www.instagram.com/songsnepal/"
						>
							<FaInstagram style={styles.icon} />
						</a>
					</div>
				</div>
				<div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", width:"96%",}}>
				<div style={{display:"flex", flexWrap:"wrap", width:"72%", justifyContent:"flex-end" }}>
				<div style={{ display:"flex", width:"180px",}}>	
					<a
						target="_blank"
						rel="noreferrer noopener"
						style={styles.nonAnchorStyle}
						href="#"
					>
						Legal
					</a>
					
				</div>
				<div style={{ display:"flex", width:"180px"}}>
				<a
						target="_blank"
						rel="noreferrer noopener"
						style={styles.nonAnchorStyle}
						href="#"
					>
						Privacy Policy
					</a>
				</div>
				<div style={{ display:"flex", width:"180px"}}>
					<a
						target="_blank"
						rel="noreferrer noopener"
						style={styles.nonAnchorStyle}
						href="#"
					>
						Cookies
					</a>
				</div>
				</div>
				<div style={{...fontStyles.normalLight,}}>© 2021 SongsNepal App</div>
		  </div>
			</div>
			
		</div>
	);
};

const styles = {
	footer: {
		background:
			"transparent linear-gradient(0deg, #8C37F6 0%, #4D34F9 59%, #1431FB 100%) 0% 0% no-repeat padding-box",
		color: "#FFFFFF",
		lineHeight: 2,
	},
	appInfoContainer: {
		//maxWidth: 1240,
    margin: "auto",
		display: "flex",
		justifyContent: "space-between",
		padding: "50px 80px",
		flexWrap: "wrap",
		...fontStyles.mediumRegular,
	},
	header: {
		color: "#FFFFFFCC",
		textHeight: 18,
		textTransform: "uppercase",
		opacity: 1,
		marginBottom: 10,
		...fontStyles.mediumRegular,
	},
	socialIcons: {
		display: "flex",
		justifyContent: "space-between",
		width: 96,
		marginRight:"4%",
	},
	downloadIcons: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	downloadIcon: {
		paddingTop: 10,
	},
	item: {
		padding: "0 30px",
	},
	nonAnchorStyle: {
		textDecoration: "none",
		color: "#FFFFFF",
		...fontStyles.normalLight,
		
	},
	logo: {
		backgroundImage: `url(${Logo})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		height: 195,
		width: 195,
	},
	icon: {
		color: "#FFFFFF",
	},
	button: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 8,
	},

};

export default Footer;
