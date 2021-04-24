import React from 'react';

import PropTypes from 'prop-types';

const FooterElement = ({ title, elements }) => {
	return (
		<section>
			<h5>{title}</h5>
			<ul>
				{elements.map((el) => (
					<li key={el}>
						<a href={`/${el.toLowerCase()}`}>{el}</a>
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
