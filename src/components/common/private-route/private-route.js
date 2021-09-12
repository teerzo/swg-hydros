// Packages
import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default function PrivateRoute({ component: Component, roles, ...rest }) {

    let location = useLocation();


    useEffect(() => {
        console.log('location', location);
    },[location]);

    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('user')) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            // logged in so return component
            return <Component {...props} />
        }} />
    );
}
