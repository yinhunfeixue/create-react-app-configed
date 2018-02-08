import React, { Component } from 'react';
import './App.less';
import RouteConfig from './config/RouteConfig';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <h2>此模板基于create-react-app</h2>
        </div>
        <RouteConfig />
      </div>
    );
  }
}

export default App;
