import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import month_reducer from '../reducer/month_reducer.js'
import users_reducer from '../reducer/users_reducer.js'


let combinedReducers = combineReducers({ month: month_reducer,  users: users_reducer});

const store = createStore(
    combinedReducers,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;

