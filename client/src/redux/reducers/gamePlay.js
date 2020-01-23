/* Dependencies */
/* -------------------------------*/

import { RESET_GAME, TILE_CLICK } from '../actionTypes';

/* Global variables and instances */
/* -------------------------------*/

const randomSort = () => 0.5 - Math.random();
const shuffleTiles = tiles => [...tiles].sort(randomSort);

/* MAIN */
/* -------------------------------*/

export default function(state = initialState, action) {
	switch (action.type) {
		case TILE_CLICK: {
			const { tileId } = action.payload;
			if (state.clickedTiles.includes(tileId)) {
				return {
					...state,
					shuffledTiles: shuffleTiles(state.tiles),
					score: 0,
					topScore: state.topScore,
					clickedTiles: [],
					gamesPlayed: state.gamesPlayed++,
				};
			}
			const score = state.score++;
			const topScore = score > state.topScore ? score : state.topScore;
			return {
				...state,
				shuffledTiles: shuffleTiles(state.tiles),
				score,
				topScore,
				clickedTiles: [...state.clickedTiles, tileId],
			};
		}

		case RESET_GAME: {
			return {
				...state,
				shuffledTiles: shuffleTiles(state.tiles),
				score: 0,
				clickedTiles: [],
				gamesPlayed: 0,
			};
		}

		default: {
			return {
				...state,
				shuffledTiles: shuffleTiles(state.tiles),
			};
		}
	}
}

export const initialState = {
	tiles: [],
	shuffledTiles: [],
	score: 0,
	topScore: 0,
	clickedTiles: [],
	gamesPlayed: 0,
};
