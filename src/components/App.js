import React, { Component } from 'react';
import './SiteHeader';
import '../assets/styles/App.css';
import SiteHeader from './SiteHeader';
import SiteBody from './SiteBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <SiteBody />
      </div>
    );
  }
}

export default App;
