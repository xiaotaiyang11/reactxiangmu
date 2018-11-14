import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import 'antd/dist/antd.css';
=======
//import Store from 'Store';
 //import Action from '../Action';
 //import {createStore} from 'redux';
>>>>>>> 7e26c6f9acd497bd504ae6b73b02fd6632a30024
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
