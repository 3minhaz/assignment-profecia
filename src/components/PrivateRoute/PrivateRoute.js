import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return "loading"
    }    
    console.log(user?.email);
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            >
            </Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;