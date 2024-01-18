import endpoint from './endpoint';


const artistRegister = {
  url: `${endpoint.apiEndpoint}/artists/v1/auth`
}

const companyRegister = {
  url: `${endpoint.apiEndpoint}/music_companies/v1/auth`
}

const login = {
  url: `${endpoint.apiEndpoint}/auth/sign_in`
}

const logout = {
  url: `${endpoint.apiEndpoint}/auth/sign_out`
}

const accountVerify = {
  url: `${endpoint.apiEndpoint}/auth/confirmation`
}

const requestNewPassword = {
  url: `${endpoint.apiEndpoint}/auth/password`
}

const passwordVerifyOtp = {
  url: `${endpoint.apiEndpoint}/auth/password/verify_token`
}


export default {
  artistRegister,
  companyRegister,
  login,
  logout,
  accountVerify,
  requestNewPassword,
  passwordVerifyOtp,
}
