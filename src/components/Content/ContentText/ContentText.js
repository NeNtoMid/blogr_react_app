import React from 'react';

import PropTypes from 'prop-types';

const ContentText = ({ title, children }) => {
	return (
		<div>
			<h4>{title}</h4>
			<p>{children} </p>
		</div>
	);
};

ContentText.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
export default ContentText;
