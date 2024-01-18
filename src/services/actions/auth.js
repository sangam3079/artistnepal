import { extractToken, updateSession, resetSession, storeData } from '../../helpers/localStorage';
import auth from '../auth';
import Cookie from 'js.cookie';

export const types = {
  TOGGLE_AUTHENTICATION: 'TOGGLE_AUTHENTICATION',
  LOGOUT: 'LOGOUT',
  ONBOARDING: 'ONBOARDING',
  STORE_EMAIL: 'STORE_EMAIL',
  STORE_PASSWORD_RESET_TOKEN: 'STORE_PASSWORD_RESET_TOKEN',
};
const toggleAuthentication = (token) => ({
  type: types.TOGGLE_AUTHENTICATION,
  token,
});

const retrieveSessionFromLocalStorage = (dispatch) => {
  return new Promise(async (resolve, reject) => {
    let session = {
      loadedFromLocalStorage: true,
      'access-token': Cookie.get('access-token'),
      isAuthenticated: Cookie.get('isAuthenticated'),
      client: Cookie.get('client'),
      uid: Cookie.get('uid'),
      role: Cookie.get('role'),
      username: Cookie.get('name'),
    }
    const { ...token } = session
    dispatch(toggleAuthentication(token))
    resolve(true)
  })
}

const artistRegister = (params) => {
  return (dispatch) => {
    return auth.artistRegister(params)
      .then(response => {
        if (response.success) {
          const { data } = response.data
          // storeData('username', data?.user?.profile?.name)
          const showOnboarding = data?.user?.showOnboardingPage
          const email = data?.user?.email
          dispatch({ type: types.ONBOARDING, showOnboarding })
          dispatch({ type: types.STORE_EMAIL, email })
          manageToken(response.headers, dispatch)
          return response
        } else {
          return response
        }
      })
  }
}

const companyRegister = (params) => {
  return (dispatch) => {
    return auth.companyRegister(params)
      .then(response => {
        if (response.success) {
          const { data } = response.data
          const showOnboarding = data?.user?.showOnboardingPage
          const email = data?.user?.email
          dispatch({ type: types.ONBOARDING, showOnboarding })
          dispatch({ type: types.STORE_EMAIL, email })
          // storeData('username', data?.user?.profile?.name)
          manageToken(response.headers, dispatch)
          return response
        } else {
          return response
        }
      })
  }
}

const login = (params) => {
  return (dispatch) => {
    return auth.login(params)
      .then(response => {
        if (response.success) {
          const { data } = response.data
          const showOnboarding = data?.user?.showOnboardingPage
          dispatch({ type: types.ONBOARDING, showOnboarding })

          // storeData('username', data?.user?.profile?.name)
          manageToken(response.headers, dispatch)
          return response
        } else {
          return response
        }
      })
  }
}


const logout = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { auth: { token } } = state;

    return auth.logout(token)
      .then(response => {
        if (response.success) {
          manageToken(response.headers, dispatch)
          resetSession()
          dispatch({ type: types.LOGOUT })
        } else {
          console.log('Failed to logout')
        }
        return response
      })
  }
}

const requestNewPassword = (email) => {
  return (dispatch) => {
    return auth.requestNewPassword(email)
      .then(response => {
        if (response.success) {
          dispatch({ type: types.STORE_EMAIL, email })
        } else {
          console.log('Failed to reset password')
        }
        return response
      })
  }
}

const passwordVerifyOtp = (otp, email) => {
  return (dispatch) => {
    return auth.passwordVerifyOtp(otp, email)
      .then(response => {
        if (response.success) {
          dispatch({ type: types.STORE_PASSWORD_RESET_TOKEN, token: response.data.token })
        }
        return response
      })
  }
}

const manageToken = (headers, dispatch) => {
  const token = extractToken(headers)
  dispatch(toggleAuthentication(token))
  updateSession(token)
}

const authActions = {
  toggleAuthentication,
  artistRegister,
  companyRegister,
  login,
  retrieveSessionFromLocalStorage,
  logout,
  requestNewPassword,
  passwordVerifyOtp,
}

export default authActions

