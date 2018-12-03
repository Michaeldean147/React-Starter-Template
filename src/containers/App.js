import React, { Component } from 'react';
import '../styles/App.css';
import Navigation from '../components/Navigation';
import Home from './Home.js';
import NasaInfo from './NasaInfo.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/nasa' component={NasaInfo}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
