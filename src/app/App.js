import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home";
import Header from './Header';
import Calculater from './calculater/calculater'


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header></Header>
          <Switch>          
            <Route exact path='/' component={Home}/>
            <Route path='/calculater' component={Calculater}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
