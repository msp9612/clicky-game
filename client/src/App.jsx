/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from './components/Nav';
import Score from './components/Score';
import GameBoard from './components/GameBoard';
import PlayAgain from './components/PlayAgain';
import './AppStyles.scss';

/* MAIN */
/* -------------------------------*/

export default () => (
	<React.Fragment>
		<Nav />
		<Container className='mt-1' fluid={true}>
			<Row>
				<Col>
					<Score />
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col>
					<GameBoard />
				</Col>
			</Row>
		</Container>
		<PlayAgain />
	</React.Fragment>
);
