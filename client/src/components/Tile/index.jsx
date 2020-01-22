/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { connect } from 'react-redux';
import { onTileClick } from '../../redux/actions';
import './TileStyles.scss';

/* MAIN */
/* -------------------------------*/

function Tile(props) {
	const styles = {
		width: '100%',
		height: '100%',
	};

	const { score, gamesPlayed } = props,
		makeItJiggle = score === 0 && gamesPlayed > 0 ? 'jiggle ' : '';

	return (
		<img
			alt='Cheese'
			src={props.src}
			onClick={props.onTileClick}
			className={makeItJiggle + 'img-thumbnail shadow-sm'}
			style={styles}
		/>
	);
}

export default connect(
	// mapStateToProps
	state => ({
		score: state.gamePlay.score,
		gamesPlayed: state.gamePlay.gamesPlayed,
	}),
	// mapDispatchToProps
	{ onTileClick }
)(Tile);
