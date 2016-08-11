import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);

  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
