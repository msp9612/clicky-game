/* Dependencies */
/* -------------------------------*/

import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

/* MAIN */
/* -------------------------------*/

// react-redux Provider wrapper
const renderApp = () =>
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);

// Hot module reloading for app
if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./App', renderApp);
}
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
