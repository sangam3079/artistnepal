import authApis from './apis/auth';
import fetchApi from './fetchApi';


const artistRegister = (params) => {
  const request = {
    url: authApis.artistRegister.url,
    body: params,
  }
  return fetchApi.postFetch(request)
    .then(res => {
      if (res.ok) {
        return {
          success: true,
          headers: res.headers,
          data: res.body,
        }
      } else {
        return res.body
      }
    })
}

const companyRegister = (params) => {
  const request = {
    url: authApis.companyRegister.url,
    body: params,
  }
  return fetchApi.postFetch(request)
    .then(res => {
      if (res.ok) {
        return {
          success: true,
          headers: res.headers,
          data: res.body,
        }
      } else {
        return res.body
      }
    })
}

const login = (params) => {
  const request = {
    url: authApis.login.url,
    body: params,
  }
  return fetchApi.postFetch(request)
    .then(res => {
      if (res.ok) {
        return {
          success: true,
          headers: res.headers,
          data: res.body,
        }
      } else {
        return res.body
      }
    })
}

const logout = (token) => {
  const request = {
    url: authApis.logout.url,
  }
  return fetchApi.deleteFetch(request, token)
    .then(res => {
      if (res.ok) {
        return {
          success: true,
          headers: res.headers,
        }
      } else {
        return res.body
      }
    })
}

const accountVerificationCode = (email, otp) => {
  const request = {
    url: authApis.accountVerify.url,
    body: { email: email, otp: otp }
  }
  return fetchApi.putFetch(request)
    .then(res => res.body)
}

const resendAccountVerificationCode = (email) => {
  const request = {
    url: authApis.accountVerify.url,
    body: { email: email }
  }
  return fetchApi.postFetch(request)
    .then(res => res.body)
}

const requestNewPassword = (email) => {
  const redirectUrl = `${window.location.protocol}//${window.location.hostname}/reset_password`

  const request = {
    url: authApis.requestNewPassword.url,
    body: { email, redirectUrl }
  }
  return fetchApi.postFetch(request)
    .then(res => res.body)
}

const passwordVerifyOtp = (otp, email) => {
  const request = {
    url: authApis.passwordVerifyOtp.url,
    body: { otp, email }
  }

  return fetchApi.postFetch(request)
    .then(res => {
      return res.body
    })
}

const updatePassword = (params = {}) => {
  const request = {
    url: authApis.requestNewPassword.url,
    body: params
  }
  return fetchApi.putFetch(request)
    .then(res => {
      return res.body
    })
}

export default {
  artistRegister,
  companyRegister,
  login,
  logout,
  accountVerificationCode,
  resendAccountVerificationCode,
  requestNewPassword,
  passwordVerifyOtp,
  updatePassword,
}
