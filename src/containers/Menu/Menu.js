import React, { useState } from 'react';

import styles from './Menu.module.scss';

import MenuElement from './MenuElement/MenuElement';

import menuItems from '../../constants/menuItems';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Menu = () => {
	const [displayMenuElement, setDisplayMenuElement] = useState(null);

	const handleMenuChange = (id) => {
		setDisplayMenuElement(id);
	};

	const isAuth = useSelector((state) => state.user.isAuth);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.menu}>
					{menuItems.map(({ title, elements }) => (
						<MenuElement
							title={title}
							elements={elements}
							change={() => handleMenuChange(title)}
							isDisplay={displayMenuElement === title}
							key={title}
						/>
					))}
				</div>

				<div className={styles.buttons}>
					{!isAuth ? (
						<>
							<NavLink to='/login' activeClassName={styles.activeLoginButton}>
								Login
							</NavLink>
							<NavLink to='/signup' activeClassName={styles.activeSignupButton}>
								Sign Up
							</NavLink>
						</>
					) : (
						<NavLink to='/logout' className={styles.activeSignupButton}>
							Logout
						</NavLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default Menu;
