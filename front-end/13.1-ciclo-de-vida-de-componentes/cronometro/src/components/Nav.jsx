import React, { Component } from 'react';
// import './App.css'

class Nav extends Component {
  constructor(){
    super();
    this.state = {
      titlePage: 'Cronômetro Serumaninhos :)'
    }
  }

  render() {
    return(
      <div className='nav'>
        <h1>{ this.state.titlePage }</h1>
      </div>
    )
  }
}

export default Nav;