const routes = {
	HOME_V2: "/v2",
	LOGIN_V2: "/login",
	REGISTER: "/register",
	SIGNUP_V2: "/register/:registerType",
	VERIFY_CODE_V2: "/verify-code",

	HOME: "/",
	DASHBOARD: "/dashboard",

	LOGIN: "/artists/sign_in",
	LOGIN_EMAIL: "/artists/email/sign_in",
	LOGIN_PHONE: "/artists/phone/sign_in",

	SIGNUP: "/artists/sign_up",
	SIGNUP_EMAIL: "/artists/email/sign_up",
	SIGNUP_PHONE: "/artists/phone/sign_up",
	SIGNUP_TYPE: "/sign_up",

	COMPANY_LOGIN: "/company/sign_in",
	COMPANY_SIGNUP: "/company/sign_up",

	VERIFY_CODE: "/verify",
	FORGOT_PASSWORD: "/forgot_password",
	RESET_PASSWORD_VERIFICATION_CODE: '/reset_password_verify',
	RESET_PASSWORD: "/reset_password",

	CONTACT_US: "/contact-us",
	//BLOG:"/blog",
	BLOG_ID:"/:blog_id",
	ARTIST_DASHBOARD:"/artist-dashboard"
};

export default routes;
