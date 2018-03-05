import React from 'react';

import './index.scss';

const mockFooter = ['PokeP', 'SlowPokes', 'Learning'];

const types = mockFooter.map(type => {
	return (
		<button>{type}</button>
	);
});

function FooterButtons() {
	return (
		<div>{types}</div>
	);
}

function Footer() {
	return (
		<div className="footer">
			<FooterButtons />
		</div>
	);
}

export default Footer;
