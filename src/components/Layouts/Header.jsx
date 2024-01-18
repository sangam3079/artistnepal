import React from "react";
import Logo from "../../assets/images/Logo/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { Button, message, Col, Row, Menu, Dropdown} from "antd";
import routes from "../../constants/routes";
import { fontStyles } from "../../styles/fonts";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../services/actions/auth";
import { useHistory } from "react-router-dom";
import SpinButton from "../Common/SpinButton";
import { MenuOutlined, HomeOutlined, LoginOutlined, BookOutlined, ContactsOutlined} from '@ant-design/icons';

const layout = {
	full: {
		xxl: { span: 24, offset: 0 },
		xl: { span: 24, offset: 0 },
		lg: { span: 24, offset: 0 },
		md: { span: 24, offset: 0 },
		sm: { span: 24, offset: 0 },
		xs: { span: 24, offset: 0 },
	},

	logo: {
		xxl: { span: 10 },
		xl: { span: 8},
		lg: { span: 6 },
		//md: { span: 4 },
		sm: { span: 18},
		xs: { span: 18 },
	},

	nav: {
		xxl: { span: 12 },
		xl: { span: 12},
		lg: { span: 14 },
		md: { span: 0 },
		sm: { span: 0 },
		xs: { span: 0 },
	},

	menu: {
		xxl: { span: 0 },
		xl: { span: 0},
		lg: { span: 0 },
		md: { span: 4 },
		sm: { span: 6 },
		xs: { span: 6 },
	}

	
};

const resMenu = (
	<Menu>
		<Menu.Item className="header-menu">
			<Link to="/" >
			 <span className="header-menu-item">Home</span>
			</Link>
			</Menu.Item>
		<Menu.Item className="header-menu">
			<a href='https://blog.songsnepal.com'>
			 <span className="header-menu-item">Blog</span>
			</a>
		</Menu.Item>
		<Menu.Item className="header-menu">
			<Link to="/contact-us">
			 <span className="header-menu-item">Contact us</span>
			</Link>
		</Menu.Item>
		<Menu.Item className="header-menu">
			<Link to={routes.LOGIN_EMAIL}>
			 <span className="header-menu-item">Log In</span>
			</Link>
		</Menu.Item>

	</Menu>
	)



const Header = props => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	const history = useHistory();

	const handleLogout = () => {
		dispatch(authActions.logout()).then(response => {
			if (response.success) {
				history.push(routes.LOGIN);
			} else {
				message.error("Something went wrong. Please try again.");
			}
		});
	};

	return (
		<Col {...layout.full} >
		<div style={styles.container}>
			
			<Col {...layout.logo}>	
			<Link to="/">
				<img src={Logo} alt="Songs Nepal" style={styles.logo}/>
			</Link>
			</Col>
			<Col {...layout.nav}>
			<div style={styles.navigations}>
				<NavLink
					style={styles.navigationOptions}
					exact
					to="/"
					activeStyle={styles.activeLink}
				>
					<div>Home</div>
				</NavLink>
				<a
					style={styles.navigationOptions}
					exact
					//to={routes.BLOG}
			  	href='https://blog.songsnepal.com'
					activeStyle={styles.activeLink}
				>
					<div>News</div>
				</a>
				<NavLink
					style={styles.navigationOptions}
					exact
					to="/contact-us"
					activeStyle={styles.activeLink}
				>
					<div>Contact Us</div>
				</NavLink>
				{isAuthenticated ? (
					<NavLink
						style={styles.navigationOptions}
						exact
						onClick={handleLogout}
						to={routes.LOGIN_EMAIL}
						activeStyle={styles.activeLink}
					>
						<Button shape="round" size="large">
							LOG OUT
						</Button>
					</NavLink>
				) : (
					<NavLink
						style={styles.navigationOptions}
						exact
						to={routes.LOGIN_EMAIL}
						activeStyle={styles.activeLink}
					>
						<SpinButton
							text="LOGIN"
							padding="0 2em"
							style={fontStyles.mediumRegular}
						/>
					</NavLink>
				)}
			</div>
			</Col>
			<Col {...layout.menu}>
				<div style={styles.menuIcon}>
				<Dropdown
            overlay={resMenu}
            trigger={[`click`]}
            //className="header-dropdown"
            placement="bottomCenter"
          >

            <MenuOutlined />


          </Dropdown>
				</div>
			</Col>
		</div> 
		</Col>
	);
}; 

const styles = {
	container: {
		padding: "20px 80px",
		display: "flex",
		justifyContent: "space-between",
	},
	activeLink: {
		color: "#8C37F6",
		textDecoration: "none",
		borderBottom: "5px solid transparent",
		borderImage:
			"linear-gradient(to right, #8C37F6 0%, #4D34F9 40%, transparent 20%)",
		borderImageSlice: 1,
		marginTop: 5,
	},
	navigationOptions: {
		display: "flex",
		marginRight: 40,
		alignItems: "center",
		cursor: "pointer",
		zIndex: 1,
		color: "#979797",
		fontSize: 22,
	},
	navigations: {
		display: "flex",
		justifyContent: "flex-end",
	},
	menuIcon: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		cursor: "pointer",
		//zIndex: 1,
	//	color: "#979797",
		marginTop: "12%",
		fontSize:"25px",	
	},
	logo: {
		width:"clamp(150px, 80%, 450px)",
		height:"100%"
	}, 

};

export default Header;
