import React, { useState } from 'react';

import { ReactComponent as LogoSvg } from './../../images/Header/logo.svg';

import { ReactComponent as MenuSvg } from './../../images/Header/menu.svg';

import { ReactComponent as CloseMenuSvg } from './../../images/Header/closeMenu.svg';

import { ReactComponent as ArrowLightSvg } from './../../images/Header/arrowLight.svg';

import Menu from './../Menu/Menu';

import styles from './Header.module.scss';

import menuElements from './../../constans/menuItems';

const Header = () => {
	const [isDisplay, setIsDisplay] = useState(false);

	const handleMenuChange = () => {
		setIsDisplay((prevState) => !prevState);
	};
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<LogoSvg />

				<div className={styles.desktopMenu}>
					<ul>
						{menuElements.map((el) => (
							<li>
								<a href='/products'>
									{el.title} <ArrowLightSvg />
									<ul>
										{el.elements.map((link) => (
											<li>
												<a href={`/${link.toLocaleLowerCase()}`}>{link}</a>
											</li>
										))}
									</ul>
								</a>
							</li>
						))}
					</ul>

					<div className={styles.desktopButtons}>
						<a href='/login'>Login</a>
						<a href='/signup' className={styles.signupButton}>
							Sign Up
						</a>
					</div>
				</div>
				<div className={styles.mobileMenu}>
					{!isDisplay ? (
						<MenuSvg className={styles.menuSvg} onClick={handleMenuChange} />
					) : (
						<>
							<CloseMenuSvg
								className={styles.menuSvg}
								onClick={handleMenuChange}
							/>
							<Menu />
						</>
					)}
				</div>
			</nav>

			<div className={styles.hero}>
				<h1>A modern publishing platform</h1>
				<h2>Grow your audience and build your online brand</h2>
			</div>

			<div className={styles.buttons}>
				<a href='/start'>Start for free</a>
				<a href='/end'>Learn More</a>
			</div>
		</header>
	);
};

export default Header;
