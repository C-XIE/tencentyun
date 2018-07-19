import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     import('./App.css')
  //   }, 3000);
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">1</h1>
        </header>
        <p className="App-intro">
          {/* <img width={200} height={320} src={process.env.PUBLIC_URL+'wm.JPG'} alt='' /> */}
        </p>
      </div>
    );
  }
}

export default App;
