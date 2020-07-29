import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/storeRedux';
import './index.css';
import App from './components/App';

import {HashRouter as Router, Route, } from 'react-router-dom';
import Header from "./components/Header/header.jsx";
import Nav from "./components/Nav/nav.jsx";


ReactDOM.render(
    <Provider store={store}>
        <Header/>
        <Router>
            <Route path='/' exact component={Nav}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);


