import React, { Component}  from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return <div>{'yeah, its working'}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
