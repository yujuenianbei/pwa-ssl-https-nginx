import React, { Component } from 'react';
import Home from './layout/Home/index'
import News from './layout/News/index'
import State from './layout/State/index'
import User from './layout/User/index'
import Setting from './layout/Setting/index'
import { HashRouter as Router, Route, Link, Switch, HashHistory } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

class Main extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/state" component={State} />
                <Route path="/user" component={User} />
                <Route path="/setting" component={Setting} />
            </Router>
        );
    }
}
export default Main;