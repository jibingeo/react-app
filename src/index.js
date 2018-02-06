import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import PostList from './components/PostList'
import reducers from './reducers'

let middlewares = []
let storeEnhancer = applyMiddleware(...middlewares)

if(process.env.NODE_ENV !== 'production') {
	storeEnhancer = compose(
		storeEnhancer
	)
}

let store = createStore(
	reducers,
	storeEnhancer
)


const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache()
});

let component = (
	<ApolloProvider client={client}>
		<Provider store={store}>
			<PostList />
		</Provider>
	</ApolloProvider>
)

ReactDOM.render(
	component,
	document.getElementById('container')
);
