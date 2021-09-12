// Packages
import React, { useEffect } from "react";
import { BrowserRouter, Router as BaseRouter, Switch, Route, Redirect , useLocation} from "react-router-dom";

// Components
// import Header from 'components/header';

// Routes
import Home from './home';
import Hydros from './hydros';

import { history } from 'helpers/history';


export default function Router() {
    

    return (
        <BrowserRouter history={history}>
            {/* <Header /> */}
            <div className="container">
                <Switch>
                   
            
                    <Route path="/hydros">
                        <Hydros />
                    </Route>
                    <Redirect to="/hydros" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}