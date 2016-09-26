import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

let store = createStore(reducers)

let component = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(
	component, 
	document.getElementById('container')
);
