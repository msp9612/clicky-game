/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { onReset } from '../redux/actions';

/* Global variables and instances */
/* -------------------------------*/

const PlayAgain = props => {
	const { score, tileCount } = props;

	return (
		<Modal
			show={score === tileCount}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			keyboard={false}
			backdrop='static'
		>
			<Modal.Header>
				<Modal.Title
					id='contained-modal-title-vcenter'
					className='mx-auto text-center'
				>
					You win! Nice job!
				</Modal.Title>
			</Modal.Header>
			<Modal.Footer>
				<Button className='d-block mx-auto' onClick={props.onReset}>
					Play Again
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

/* MAIN */
/* -------------------------------*/

// Connect to Redux store
export default connect(
	// mapStateToProps
	state => ({
		score: state.gamePlay.score,
		tileCount: state.gamePlay.tiles.length,
	}),
	// mapDispatchToProps
	{ onReset }
)(PlayAgain);
