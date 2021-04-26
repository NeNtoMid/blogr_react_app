import React from 'react';

import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import Button from '../UI/Button/Button';

import Navbar from './../UI/Navbar/Navbar';

const Header = ({ isDisplay, changeMenu }) => {
	return (
		<header className={styles.header}>
			<Navbar isDisplay={isDisplay} changeMenu={changeMenu} />
			<div className={styles.hero}>
				<h1>A modern publishing platform</h1>
				<h2>Grow your audience and build your online brand</h2>
			</div>

			<div className={styles.buttons}>
				<Button link='/start' isPrimary>
					Start for free
				</Button>
				<Button link='/end'>Learn more</Button>
			</div>
		</header>
	);
};

Header.propTypes = {
	isDisplay: PropTypes.bool.isRequired,
	changeMenu: PropTypes.func.isRequired,
};
export default Header;
