/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { connect } from 'react-redux';
import Tile from '../Tile';

/* MAIN */
/* -------------------------------*/

function GameBoard(props) {
	return (
		<div className='gameboard mx-auto'>
			{props.shuffledTiles.map((tile, idx) => (
				<div className='tile' key={idx}>
					<Tile src={tile} />
				</div>
			))}
		</div>
	);
}

export default connect(
	// mapStateToProps
	state => ({ shuffledTiles: state.gamePlay.shuffledTiles })
)(GameBoard);
