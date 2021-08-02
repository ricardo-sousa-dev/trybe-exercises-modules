import React, { Component } from 'react';
// import './App.css'

class Dogs extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      dog: '',
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        this.setState({ dog: data.message });
      });
  }

  render() {
    return (
      <div className="content">
        <img className="pictureDogs" src={this.state.dog} />
      </div>
    );
  }
}

export default Dogs;
