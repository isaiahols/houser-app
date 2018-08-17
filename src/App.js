import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import './reset.css';
import './App.css';

import routes from './route'
import Header from './components/Header/header';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
