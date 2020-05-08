import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { component: Component, isAuthorized, ...rest } = props;
    console.log('PrivateRoute', isAuthorized)
    
    return (
        <Route {...rest} render={(props) => {
            return isAuthorized ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }} />
    )
}
export default PrivateRoute;