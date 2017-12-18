import React from 'react';
import Logo from '../assets/logo.svg';
import '../css/App.css';

const Header = () => (
  <div className="App">
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="logo" />
      <h1 className="App-title">React Last FM Sampler</h1>
    </header>
  </div>
);

export default Header;