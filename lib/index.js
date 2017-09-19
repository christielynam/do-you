import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import createHistory from '../node_modules/history/createBrowserHistory';
import {
	ConnectedRouter,
	routerReducer,
	routerMiddleware,
	push
} from 'react-router-redux';

const history = createHistory();
const store = configureStore(devTools, history);
const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__();

const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(router, document.getElementById('app'));
