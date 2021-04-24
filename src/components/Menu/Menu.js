import React, { useState } from 'react';

import styles from './Menu.module.scss';

import MenuElement from './MenuElement/MenuElement';

import menuItems from './../../constans/menuItems';
const Menu = () => {
	const [displayMenuElement, setDisplayMenuElement] = useState(null);

	const handleMenuChange = (id) => {
		setDisplayMenuElement(id);
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.menu}>
				{menuItems.map(({ title, elements }) => (
					<MenuElement
						title={title}
						elements={elements}
						change={() => handleMenuChange(title)}
						isDisplay={displayMenuElement === title}
					/>
				))}
			</div>

			<div className={styles.buttons}>
				<a href='/login'>Login</a>
				<a href='/signup' className={styles.signupButton}>
					Sign Up
				</a>
			</div>
		</div>
	);
};

export default Menu;
