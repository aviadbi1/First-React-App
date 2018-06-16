import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToDoList from "./components/ToDoList/todolist";
import Soldiers from "./components/Soldiers/soldiers";
import Systems from "./components/Systems/systems";

import logo from './logo.svg';
import './App.css';
import 'typeface-roboto'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      soldiers: [],
      systems: []
    }

    this.addSystem = this.addSystem.bind(this);
  }

  addSystem(newSystem) {
    this.setState((prevState) => ({
      systems: prevState.systems.concat(newSystem)
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <ul>
              <li> <Link to="/">ToDoList</Link> </li>
              <li> <Link to="/soldiers">Soldiers</Link> </li>
              <li> <Link to="/systems">Systems</Link> </li>
            </ul>
            <hr />
            <Route exact path="/" component={ToDoList} />
            <Route path="/soldiers" render={(props) => <Soldiers {...props} />} />
            <Route path="/systems" render={(props) => <Systems {...props} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
