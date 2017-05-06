import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppProvider extends Component {
  getChildContext() {
    return { insertCss: this.props.context.insertCss };
  }
  render() {
    return this.props.children;
  }
}

AppProvider.childContextTypes = {
  insertCss: PropTypes.func.isRequired,
};
export default AppProvider;
