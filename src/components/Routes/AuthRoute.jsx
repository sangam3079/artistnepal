import * as React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import routes from "../../constants/routes";
import authActions from "../../services/actions/auth";

const AuthRoute = ({ component: Component, ...rest }) => {
  // const dispatch = useDispatch()
  // const loadedFromLocalStorage = useSelector(state => state.auth.loadedFromLocalStorage)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  // React.useEffect(() => {
  //   if (!loadedFromLocalStorage) {
  //     authActions.retrieveSessionFromLocalStorage(dispatch)
  //   }
  // }, [dispatch, loadedFromLocalStorage])

  // if (!loadedFromLocalStorage) {
  //   return <></>
  // }

  return (
    <Route
      {...rest}
      render={
        (props) => {
          if (isAuthenticated) {
            return (
              <Redirect to={{ pathname: routes.DASHBOARD }} />
            )
          } else {
            return (<Component {...props} />)
          }
        }
      }
    />
  )
}

export default AuthRoute;
