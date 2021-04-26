import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.scss';

import { NavLink } from 'react-router-dom';

const Button = ({ link, isPrimary, children }) => {
	return (
		<NavLink
			className={isPrimary ? styles.primaryButton : styles.secondaryButton}
			activeClassName={styles.primaryButton}
			to={link}
		>
			{children}
		</NavLink>
	);
};

Button.propTypes = {
	link: PropTypes.string.isRequired,
	isPrimary: PropTypes.bool,
	children: PropTypes.node,
};

export default Button;
