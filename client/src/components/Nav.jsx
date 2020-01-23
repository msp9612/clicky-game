/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';

/* Global variables and instances */
/* -------------------------------*/

const Nav = props => {
	return (
		<Navbar bg='primary' variant='light'>
			<Navbar.Brand className='mr-auto'>Clicky Memory Game</Navbar.Brand>
		</Navbar>
	);
};

/* MAIN */
/* -------------------------------*/

export default connect()(Nav);
