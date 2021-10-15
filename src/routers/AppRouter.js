import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { Dashboard } from "../pages/Dashboard";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter
