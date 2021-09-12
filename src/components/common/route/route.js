// Packages
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function CmpRoute({ component: Component, roles, ...rest}) {
    return (
        <Route {...rest}> 
            <Component {...props} />
        </Route>
    );
}