import React, { Component } from 'react';
import style from './app.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class App extends Component {
  render() {
    return (
      <div>
        {'yeah, its working'}
      </div>
    );
  }
}

export default withStyles(style)(App);
