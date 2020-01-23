/* Dependencies */
/* -------------------------------*/

import { combineReducers } from 'redux';
import gamePlay, { initialState as gamePlayState } from './gamePlay';
// (Other reducer data can go here)

/* Global variables and instances */
/* -------------------------------*/

// Initial state for root reducer
const initialState = {
	gamePlay: gamePlayState,
	// (Other reducer data can go here)
};

const tiles = [
	'/img/cheese01.png',
	'/img/cheese02.png',
	'/img/cheese03.png',
	'/img/cheese04.png',
	'/img/cheese05.png',
	'/img/cheese06.png',
	'/img/cheese07.png',
	'/img/cheese08.png',
	'/img/cheese09.png',
	'/img/cheese10.png',
	'/img/cheese11.png',
	'/img/cheese12.png',
	'/img/cheese13.png',
	'/img/cheese14.png',
	'/img/cheese15.png',
];

/* MAIN */
/* -------------------------------*/

initialState.gamePlay.tiles = tiles;

export const rootState = initialState;

// Merge separate reducers into a root reducer
export default combineReducers({
	gamePlay,
	// (Other reducer data can go here)
});
