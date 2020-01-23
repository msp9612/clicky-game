/* Dependencies */
/* -------------------------------*/

import { createStore } from 'redux';
import rootReducer, { rootState } from './reducers';

/* MAIN */
/* -------------------------------*/

function configureStore(preloadedState) {
	const store = createStore(
		rootReducer,
		preloadedState,
		// Enable Redux DevTools extension for store (can be used for time-travel and state inspection)
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	// Hot module reloading for reducers
	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
	}

	return store;
}

export default configureStore(rootState);
