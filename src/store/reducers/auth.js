import { types as ACTIONS } from "../../services/actions/auth";

const INITIAL_STATE = {
  loadedFromLocalStorage: false,
  isAuthenticated: false,
  token: {
    'access-token': '',
    client: '',
    uid: '',
    role: '',
    username: '',
  },
  showOnboarding: false,
  email: '',
  resetPasswordToken: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_AUTHENTICATION:
      const { isAuthenticated, loadedFromLocalStorage, ...token } = action.token
      return {
        ...state,
        isAuthenticated,
        loadedFromLocalStorage,
        token,
      }
    case ACTIONS.ONBOARDING:
      return {
        ...state,
        showOnboarding: action.showOnboarding,
      }
    case ACTIONS.STORE_EMAIL:
      return {
        ...state,
        email: action.email,
      }
    case ACTIONS.STORE_PASSWORD_RESET_TOKEN:
      return {
        ...state,
        resetPasswordToken: action.token,
      }

    default:
      return state
  }
};

export default authReducer
