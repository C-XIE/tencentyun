import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">这个小姐姐好漂亮</h1>
        </header>
        <p className="App-intro">
          <img width={200} height={320} src={process.env.PUBLIC_URL+'wm.JPG'} alt='' />
        </p>
      </div>
    );
  }
}

export default App;
