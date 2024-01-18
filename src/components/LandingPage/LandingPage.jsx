import React, { useState } from "react";
import { Button } from "antd";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Slider from "react-slick";
import {
	Container,
	Box,
	ImageContainer,
	GuideWrapper,
} from "../../styles/custom.js";
import { useHistory } from "react-router-dom";

import ArtistImage1 from "../../assets/images/Melina.png";
import ArtistImage2 from "../../assets/images/artist2.png";
import ArtistImage3 from "../../assets/images/artist3.png";
import Dots from "../../assets/images/dots.png";
import LaptopImage from "../../assets/images/Analytics3.png";
import MultipleDots from "../../assets/images/multiple-dots.svg";
import ArtistImage from "../../assets/images/artist.png";
import ShapeImage from "../../assets/images/shapes.png";
import Cover1 from "../../assets/images/img1.png";
import Cover2 from "../../assets/images/cover2.png";
import Cover3 from "../../assets/images/cover3.png";
import Quote from "../../assets/svg/Quote.svg";
import { fontStyles } from "../../styles/fonts.js";
import ApplicationLayout from "../Layouts/ApplicationLayout.jsx";
import routes from "../../constants/routes.js";
import SpinButton from "../Common/SpinButton.jsx";
import Blog from "../Blog/Blog"

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import '../../styles/react-accessible-accordion.scss'

const LandingPage = () => {
	const history = useHistory();
	const [state, setState] = useState({
		guide1: false,
		guide2: false,
		guide3: false,
		guide4: false,
	});

	const GetAccess = () => {
		const settings = {
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			fade: true,
		};

		return (
			<Box  padding="0 80px" justifyContent="space-between" flexWrap="wrap-reverse">
				<Box
					alignItems="flex-start"
					flexDirection="column"
					justifyContent="center"
					padding="10px 0"
				  //style={{marginBottom:"12px"}}
				>
					<div style={fontStyles.mediumRegular}>SONGS NEPAL FOR ARTIST</div>
					<div style={fontStyles.extraLargeBold}>Build your musical Career.</div>
					<p style={fontStyles.mediumRegular}>
						Get all tools on SongsNepal app to take your music
						<br />
						to the audience. SongsNepal helps you to create a 
						<br /> strong online presence.
					</p>
					<SpinButton
						text="GET ACCESS"
						style={fontStyles.mediumRegular}
						padding="0 20px"
						onClick={() => history.push(routes.SIGNUP_TYPE)}
					/>
				</Box>
				<ImageContainer
					image={Dots}
					style={{
						width: "clamp(230px, 100%, 510px)",
						order: 0,
						alignSelf: "center",
					}}
				>
					<Slider {...settings}>
						<img src={ArtistImage1} alt="User"/>
					{/*	<img src={ArtistImage2} alt="User"/> */}
						<img src={ArtistImage3} alt="User"/>
					</Slider>
				</ImageContainer>
			</Box>
		);
	};

/*	const renderGuideText = show => {
		if (show && state.guide1) {
			return (
				<div style={{ ...fontStyles.mediumRegular, padding: '10px 80px' }}>
					To upload your songs and music albums on SongsNepal, 
					you need to create an artist account. Sign Up here.
				</div>
			);
		}
		if (show && state.guide2) {
			return (
				<div style={{ ...fontStyles.mediumRegular, padding: '10px 80px' }}>
					Add unlimited songs for free from an artist account on SongsNepal. Upload Here
				</div>
			);
		}
		if (show && state.guide3) {
			return (
				<div style={{ ...fontStyles.mediumRegular, padding: '10px 80px' }}>
					Get detailed information on how the audience found your music and their demographic reports at 
					the ‘Analytics’ section. It helps to understand your audience and grow the fanbase.
				</div>
			);
		}
		if (show && state.guide4) {
			return (
				<div style={{ ...fontStyles.mediumRegular, padding: '10px 80px' }}>
					You need to have 100 followers and a total of 1000 plays on your artist account.
					Then, you will get the option to apply for monetization.
				</div>
			);
		}
	};

	const renderGuide = (show, title, key) => {
		return (
			<GuideWrapper show={show}>
				<Box style={styles.help} onClick={() => handleGuide([key], !show)}>
					<div style={fontStyles.largeRegular}>{title}</div>
					{renderIcon(show)}
				</Box>
				{renderGuideText(show)}
			</GuideWrapper>
		);
	};

	const handleGuide = (key, value) => {
		setState({ ...state, [key]: value });
	};

	const renderIcon = show => {
		if (show) {
			return <AiOutlineMinus style={styles.icon} />;
		}
		return <AiOutlinePlus style={styles.icon} />;
	};*/

	const items = [
		{
			uuid:1,
			heading:"Create Artist Account On SongsNepal",
			content:"To upload your songs and music albums on SongsNepal,you need to create an artist account. Sign Up here.",
		},
		{
			uuid:2,
			heading:"Upload Songs On SongsNepal",
			content:"Add unlimited songs for free from an artist account on SongsNepal. Upload Here.",
		},
		{
			uuid:3,
			heading:"Know Your Audience & Increase Fanbase",
			content:"Get detailed information on how the audience found your music and their demographic reports at the ‘Analytics’ section. It helps to understand your audience and grow the fanbase.",
		},
		{
			uuid:4,
			heading:"Apply For Monetization",
			content:"	You need to have 100 followers and a total of 1000 plays on your artist account.Then, you will get the option to apply for monetization."
		}
	]

	const GetStartedGuide = () => {
		return (
			<Box flexDirection="column" padding="20px 0">
				<div style={{ ...fontStyles.extraLarge, padding: "0 80px" }}>
					How to get started?
				</div>
			{/*	<Box flexDirection="column">
					{renderGuide(state.guide1, "Create Artist Account On SongsNepal", "guide1")}
					{renderGuide(state.guide2, "Upload Songs On SongsNepal", "guide2")}
					{renderGuide(
						state.guide3,
						"Know Your Audience & Increase Fanbase",
						"guide3"
					)}
					{renderGuide(state.guide4, "Apply For Monetization", "guide4")}
					</Box> */}
					<Box flexDirection="column">
						<Accordion allowZeroExpanded>
							{items.map((item) => (
								<GuideWrapper >
									<AccordionItem key={item.uuid}>
										<Box style={styles.help}>
											<AccordionItemHeading style={{display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
											    {item.heading}
													<AccordionItemButton style={{display:"flex", marginRight:"0px", width:"10%"}} />
											</AccordionItemHeading>
											</Box>
											<Box >
											<AccordionItemPanel style={styles.helpContent}>
												{item.content}
											</AccordionItemPanel>
										</Box>		
							  </AccordionItem>
							</GuideWrapper>	
							
							))}
						</Accordion>
					</Box>
			</Box>
		);
	};

	const JoinTeam = props => {
		return (
			<Box  background={props.background} justifyContent="space-between" padding={props.padding} flexWrap="wrap">
				<Box flexDirection="column">
					<div
						style={{ ...fontStyles.large, ...styles.text }}
						dangerouslySetInnerHTML={{ __html: props.title }}
					></div>
					<div style={{ ...fontStyles.mediumRegular, ...styles.text }}>
						{props.text}
					</div>
				</Box>
				<div style={{ ...fontStyles.mediumRegular, marginRight: "4%", marginTop:"30px"}}>
					<Button shape="round" size="large" onClick={() => history.push(routes.SIGNUP_TYPE)}>
						{props.buttonText}
					</Button>
				</div>
			</Box>
		);
	};

	const ConnectToFans = () => {
		return (
			<div style={{ background: "#F2F3F3", padding: "60px 80px 60px 80px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap",width:"100%"  }}>
				<div style={{ display: "flex", alignItems: "center", justifyContent:"center", width:"clamp(200px, 100%, 400px)"}} >
				<ImageContainer
					image={MultipleDots}
					size="contain"
				>
					<img src={LaptopImage} alt="laptop" width="100%"/>
					</ImageContainer>
				</div>	
					
					<div
						style={{
							textAlign: "center",
							padding:"3%",
							
							
						}}
					>
						<div style={fontStyles.extraLargeBold}>Get Paid For Your Music</div>
						<div style={fontStyles.mediumRegular}>
						  Along with free tools to upload your music and wide audience
							<br />
							reach, you too earn revenue from the streaming of
							<br />
							  your music on SongsNepal app
						</div>
					</div>
				

			</div >
		);
	};

/*	const ArtistsTestimonials = () => {
		return (
			<Box style={styles.artistsDiv}  padding="20px 80px" flexWrap="wrap">
				<div style={{paddingTop:"6rem"}}>
					<img src={Quote} alt="quote" />
					<div style={{ ...fontStyles.largeRegular, marginTop: 15}}>
						Whether you’re a<br />
						bigger artist or just
						<br />
						developing, Songs
						<br />
						Nepal for Artists helps
						<br />
						you find your fans
						<br />
						and market better to <br />
						them."
					</div>
					<hr style={styles.hrStyle} />
					<div style={{ ...styles.text, ...fontStyles.largeLight }}>
						Sabin Rai
					</div>
					<div style={{ ...styles.text, ...fontStyles.mediumLight }}>
						ARTIST
					</div>
				</div>
				<div style={{width:"clamp(700px, 100%, 850px)"}}>
				<ImageContainer image={ShapeImage}>
					<img src={ArtistImage} width="100%" alt="artist"/>
				</ImageContainer>
				</div>
				<div
					style={{ ...fontStyles.medium, position: "absolute", right: "8%", paddingTop:30 }}
				>
					<ul
						style={{
							listStyleType: "none",
							color: " #FFFFFF6B",
							letterSpacing: "-1.15px",
							cursor: "pointer",
							opacity: 1,
							textAlign:"right"
						}}
					>
						<li>Sabin Rai</li>
						<li>Deepak Bajracharya</li>
						<li>Martha Griffin</li>
						<li>Kevin Vargas</li>
					</ul>
				</div>
			</Box>
		);
	};
*/
	const News = () => {
		return (
			<Box flexDirection="column" background="#F2F3F3" >
				{/*<Box flexDirection="column" padding="20px 80px">
					<h1 style={fontStyles.extraLarge}>Latest News</h1>
					<p style={{...fontStyles.smallRegular, marginTop:"-2%"}}>
						Our latest stories to get you inspired
					</p>
					<Box flexWrap="wrap">
						<Box flexDirection="column" style={{width:"clamp(100px, 100%, 380px)"}}>
							<img src={Cover1} width="100%" alt="cover" />
							<div style={fontStyles.mediumBold}>Nunc scelerisque tincidunt elit.</div>
							<p style={fontStyles.smallRegular}>
								Mauris imperdiet orci dapibus, commodo libero nec, interdum
								tortor. Morbi in nibh faucibus, iaculis lorem vitae, cursus
								velit. Etiam non blandit ex.{" "}
							</p>
						</Box>
						<Box flexDirection="column" style={{width:"clamp(100px, 100%, 380px)"}}>
							<img src={Cover2} width="100%" alt="cover" />
							<div style={fontStyles.mediumBold}>Nunc scelerisque tincidunt elit.</div>
							<p style={fontStyles.smallRegular}>
								Mauris imperdiet orci dapibus, commodo libero nec, interdum
								tortor. Morbi in nibh faucibus, iaculis lorem vitae, cursus
								velit. Etiam non blandit ex.{" "}
							</p>
						</Box>
						<Box flexDirection="column" style={{width:"clamp(100px, 100%, 380px)"}}>
							<img src={Cover3} width="100%" alt="cover" />
							<div style={fontStyles.mediumBold}>Nunc scelerisque tincidunt elit.</div>
							<p style={fontStyles.smallRegular}>
								Mauris imperdiet orci dapibus, commodo libero nec, interdum
								tortor. Morbi in nibh faucibus, iaculis lorem vitae, cursus
								velit. Etiam non blandit ex.{" "}
							</p>
						</Box>
					</Box>
		  </Box> */}
		    <Blog />
				<GetStartedGuide />
			</Box>
		);
	}; 

	return (
		<ApplicationLayout>
			<Container>
				<GetAccess />
				<JoinTeam
					padding="60px 80px"
					title="Create Your Huge Fanbase."
					text="Impress the wide audience on SongsNepal & create your huge fanbase community."
					buttonText="JOIN YOUR TEAM"
					background="transparent linear-gradient(180deg, #8C37F6 0%, #4D34F9 59%, #1431FB 100%) 0% 0% no-repeat padding-box"
				/>
				<ConnectToFans />
				{/*<ArtistsTestimonials />*/}
				<News />
				{/*<JoinTeam
					title="Understand Your Audience"
					text="Get detailed information on how the audience found your music and their demographic reports."
					buttonText="GET ACCESS"
					// onClick={() => history.push('/claim')}
					background="#041AD5 0% 0% no-repeat padding-box"
					padding="80px 80px"
				/> */}
			</Container>
		</ApplicationLayout>
	);
};

const styles = {
	text: {
		color: "#ffffff",
	},
	artistsDiv: {
		background:
			"transparent linear-gradient(180deg, #8C37F6 0%, #4D34F9 59%, #1431FB 100%) 0% 0% no-repeat padding-box",
		color: "#ffffff",
	//	...fontStyles.mediumBold,
	  position: "relative",
		width:"100%",
		display:"flex",
		justifyContent:"space-between"
	},
	hrStyle: {
		width: "41px",
		textAlign: "left",
		marginLeft: 0,
		height: 4,
		background: "white",
	},
	help: {
		width:"100%",
		alignItems: "center",
		cursor: "pointer",
		padding: "40px 80px",
		...fontStyles.largeRegular,
	},
	helpContent: {
		alignItems: "center",
		//cursor: "pointer",
		padding: "10px 80px",
		...fontStyles.mediumRegular,
	},
	icon: {
		fontSize: "40px",
		marginRight: "7%"
	},
};

export default LandingPage;
