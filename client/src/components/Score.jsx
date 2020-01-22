/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { connect } from 'react-redux';
import { Card, ProgressBar } from 'react-bootstrap';

/* Global variables and instances */
/* -------------------------------*/

const Score = props => {
	const { score, topScore, tileCount } = props;

	return (
		<Card className='text-center'>
			<Card.Body>
				<Card.Title className='center-text'>Top Score: {topScore}</Card.Title>
				<ProgressBar
					variant='success'
					now={(score / tileCount) * 100}
					label={score}
				/>
			</Card.Body>
		</Card>
	);
};

/* MAIN */
/* -------------------------------*/

// Connect to Redux store
export default connect(
	// mapStateToProps
	state => ({
		score: state.gamePlay.score,
		topScore: state.gamePlay.topScore,
		tileCount: state.gamePlay.tileSet.tiles.length,
	}),
	// mapDispatchToProps
	null
)(Score);
