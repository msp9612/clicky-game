/* Dependencies */
/* -------------------------------*/

import { RESET_GAME, TILE_CLICK } from './actionTypes';

/* MAIN */
/* -------------------------------*/

export const onTileClick = evt => ({
	type: TILE_CLICK,
	payload: {
		tileId: evt.target.src,
	},
});

export const onReset = () => ({
	type: RESET_GAME,
	payload: null,
});
