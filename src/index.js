import React from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from "./App";
import rootReducer from './reducers/rootReducer';
import './index.css';


const store = createStore(rootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

module.hot.accept();