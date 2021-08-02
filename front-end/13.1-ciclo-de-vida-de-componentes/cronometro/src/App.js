import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Dogs from './components/Dogs';
import Cronometer from './components/Cronometer';

class App extends Component {
  render() {

    return (
      <div>
        <Nav />
        <div className='body'>
          <Dogs />
          <Cronometer />
        </div>
      </div>
    );
  }
}

export default App;
