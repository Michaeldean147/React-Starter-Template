import React, { Component } from 'react';
import '../styles/App.css';
import Navigation from '../components/Navigation';
import Home from './Home.js';
import About from './About.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/about' component={About}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
