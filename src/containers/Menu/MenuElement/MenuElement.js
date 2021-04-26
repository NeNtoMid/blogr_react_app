import React from 'react';

import PropTypes from 'prop-types';

import styles from './MenuElement.module.scss';

import { ReactComponent as ArrowDarkSvg } from './../../../assets/images/MenuElement/arrowDark.svg';

import { Link } from 'react-router-dom';

const MenuElement = ({ title, elements, isDisplay, change }) => {
	return (
		<section className={styles.menuElement}>
			<div className={styles.wrapper} onClick={change}>
				<h5 className={isDisplay ? styles.active : undefined}>{title}</h5>
				<ArrowDarkSvg />
			</div>

			{isDisplay && (
				<ul>
					{elements.map((el) => (
						<li key={el}>
							<Link to={`/${el.toLowerCase()}`}>{el}</Link>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

MenuElement.propTypes = {
	title: PropTypes.string.isRequired,
	elements: PropTypes.array.isRequired,
	isDisplay: PropTypes.bool.isRequired,
	change: PropTypes.func.isRequired,
};

export default MenuElement;
