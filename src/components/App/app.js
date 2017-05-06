import React, { Component } from 'react';
import style from './app.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

@withStyles(style)
class App extends Component {
  render() {
    return (
      <div>
        <div className={style.header} />
      </div>
    );
  }
}

export default App;
