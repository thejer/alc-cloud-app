import React from 'react';
import logo from './logo2.png';
import pluralsight from './pluralsight.png'
import google from './google_logo.png'
import alc from './alc.png'
import twitter from './twitter.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ALC 4.0 Phase II Cloud Challenge I</h1>
        <p>
          React App on GKE
        </p>
        <p>
          Deployed by&nbsp;
           <a
          className="App-link"
          href="https://twitter.com/jerry_adeleye"
          target="_blank"
          rel="noopener noreferrer">
          Jerry Adeleye
          </a>
        </p>
        <p>
          Checkout the source code on &nbsp; 
          <a
          className="App-link"
          href="https://github.com/thejer/alc-cloud-app"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
          </a>
        </p>
        <div className="Images-div">
        <img src={pluralsight} className="pluralsight-image" alt="pluralsight"/>
        <img src={google} className="google-image" alt="google"/>
        <img src={alc} className="google-image" alt="alc"/>
        </div>
      </header>
    </div>
  );
}

export default App;
