import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ link, isPrimary, children }) => {
	return (
		<a
			className={isPrimary ? styles.primaryButton : styles.secondaryButton}
			href={link}
		>
			{children}
		</a>
	);
};

Button.propTypes = {
	link: PropTypes.string.isRequired,
	isPrimary: PropTypes.bool,
	children: PropTypes.node,
};

export default Button;
