import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './mainApp.scss';
import { Header } from '../../components/molecules/molecules';
import DetailTodo from '../DetailTodo/detailTodo';
import Home from '../Home/home';

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route>
                            <DetailTodo />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default MainApp