import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Search from './components/search';
import Person from './components/person';
import Detail from './components/detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <Router>
            <div>
                <Switch>{/*解决报错问题，它只能包着路由规则和重定向对象*/}
                    <Route path="/home" component={Home}></Route>{/*这个相当于一个容器*/}
                    <Route path="/register" component={Register}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Route path="/person" component={Person}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Redirect to="/home"/>
                </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
