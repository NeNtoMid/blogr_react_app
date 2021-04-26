import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const FooterElement = ({ title, elements }) => {
	return (
		<section>
			<h5>{title}</h5>
			<ul>
				{elements.map((el) => (
					<li key={el}>
						<Link to={`/${el.toLowerCase()}`}>{el}</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

FooterElement.propTypes = {
	title: PropTypes.string.isRequired,
	elements: PropTypes.array.isRequired,
};

export default FooterElement;
