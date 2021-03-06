import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Nav} from "./Nav";
import Popular from "./Popular/Popular";
import Battle from "./Battle/Battle";
import {Home} from "./Home/Home";
import Results from "./Battle/Results";

export const App = () => {
    return (
        <Router>
            <div className="container">
                <Nav/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/popular' component={Popular}/>
                    <Route exact path='/battle' component={Battle}/>
                    <Route exact path='/battle/results' component={Results}/>
                    <Route render={() => {
                        return <p>Not found</p>
                    }}/>
                </Switch>
            </div>
        </Router>
    )
}