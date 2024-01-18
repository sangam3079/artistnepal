import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import auth from "./reducers/auth";

const appReducer = combineReducers({
  auth,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = { auth: undefined };
  }
  return appReducer(state, action);
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
