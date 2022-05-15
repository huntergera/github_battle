import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Nav} from "./Nav";
import {Popular} from "./Popular";
import {Battle} from "./Battle";
import {Home} from "./Home";

export const App = () => {
    return (
        <Router>
            <div className="container">
                <Nav/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/popular' component={Popular}/>
                    <Route exact path='/battle' component={Battle}/>
                    <Route render={() => {
                        return <p>Not found</p>
                    }}/>
                </Switch>
            </div>
        </Router>
    )
}