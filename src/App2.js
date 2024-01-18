import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import LoginWithEmail from "./components/Login/LoginWithEmail";
import LoginWithPhone from "./components/Login/LoginWithPhone";
import SignUpTypes from "./components/SignUP/SignUpTypes";
import SignUp from "./components/SignUP/SignUp";
import SignupWithEmail from "./components/SignUP/SignUpWithEmail";
import SignUpWithPhone from "./components/SignUP/SignUpWithPhone";
import CodeVerification from "./components/SignUP/CodeVerification";
import LandingPage from "./components/LandingPage/LandingPage";
import { Provider } from "react-redux";
import configureStore from "./store";
import routes from "./constants/routes";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AuthRoute from "./components/Routes/AuthRoute";
import SignupForMusicCompany from "./components/SignUP/MusicCompanySignUp";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
import ResetPasswordVerificationCode from "./components/Login/ResetPasswordVerificationCode";
import ContactUs from "./components/ContactUs/ContactUs";
//import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";

import Homepage from "./pages/Homepage";
import ArtistDashboard from "./pages/ArtistDashboard/Home";
import Loginpage from "./pages/Auth/Login";
import RegisterOption from "./pages/Auth/RegisterOption";
import Register from "./pages/Auth/Register";
import VerifyCode from "./pages/Auth/VerifyCode";

function App() {
	const store = configureStore();

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path={routes.HOME_V2} component={Homepage} />
					<Route
						exact
						path={routes.ARTIST_DASHBOARD}
						component={ArtistDashboard}
					/>
					<AuthRoute exact path={routes.LOGIN_V2} component={Loginpage} />
					<AuthRoute exact path={routes.REGISTER} component={RegisterOption} />
					<AuthRoute exact path={routes.SIGNUP_V2} component={Register} />
					<AuthRoute
						exact
						path={routes.VERIFY_CODE_V2}
						component={VerifyCode}
					/>

					<Route exact path={routes.HOME} component={LandingPage} />
					<PrivateRoute exact path={routes.DASHBOARD} component={Home} />
					<AuthRoute exact path={routes.LOGIN} component={Login} />
					<AuthRoute
						exact
						path={routes.LOGIN_EMAIL}
						component={LoginWithEmail}
					/>
					<AuthRoute
						exact
						path={routes.LOGIN_PHONE}
						component={LoginWithPhone}
					/>
					<AuthRoute
						exact
						path={routes.COMPANY_SIGNUP}
						component={SignupForMusicCompany}
					/>
					<AuthRoute exact path={routes.SIGNUP_TYPE} component={SignUpTypes} />
					<AuthRoute exact path={routes.SIGNUP} component={SignUp} />
					<AuthRoute
						exact
						path={routes.SIGNUP_EMAIL}
						component={SignupWithEmail}
					/>
					<AuthRoute
						exact
						path={routes.SIGNUP_PHONE}
						component={SignUpWithPhone}
					/>
					<AuthRoute
						exact
						path={routes.VERIFY_CODE}
						component={CodeVerification}
					/>
					<AuthRoute
						exact
						path={routes.FORGOT_PASSWORD}
						component={ForgotPassword}
					/>
					<AuthRoute
						exact
						path={routes.RESET_PASSWORD}
						component={ResetPassword}
					/>
					<AuthRoute
						exact
						path={routes.RESET_PASSWORD_VERIFICATION_CODE}
						component={ResetPasswordVerificationCode}
					/>
					<Route exact path={routes.CONTACT_US} component={ContactUs} />
					{/*<Route exact path={routes.BLOG} component={Blog} />*/}
					<Route exact path={routes.BLOG_ID} component={BlogDetail} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
