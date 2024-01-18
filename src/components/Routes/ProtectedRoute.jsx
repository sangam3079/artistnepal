import * as React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "../../constants/routes";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const showOnboarding = useSelector(state => state.auth.showOnboarding)

  return (
    <Route
      {...rest}
      render={
        (props) => {
          if (!isAuthenticated && showOnboarding) {
            return (
              <Component {...props} />
            )
          } else {
            return <Redirect to={{ pathname: routes.LOGIN_EMAIL }} />

          }
        }
      }
    />
  )
}

export default ProtectedRoute;
