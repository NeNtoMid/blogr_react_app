import React from 'react';

import PropTypes from 'prop-types';

import { ReactComponent as LogoSvg } from './../../images/Header/logo.svg';

import { ReactComponent as MenuSvg } from './../../images/Header/menu.svg';

import { ReactComponent as CloseMenuSvg } from './../../images/Header/closeMenu.svg';

import { ReactComponent as ArrowLightSvg } from './../../images/Header/arrowLight.svg';

import Menu from './../../containers/Menu/Menu';

import styles from './Header.module.scss';

import menuElements from './../../constans/menuItems';

import Button from '../UI/Button/Button';

const Header = ({ isDisplay, changeMenu }) => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<a href='/'>
					<LogoSvg />
				</a>

				<div className={styles.desktopMenu}>
					<ul>
						{menuElements.map((el) => (
							<li key={el.title}>
								<a className={styles.menuElementLink} href='/products'>
									{el.title} <ArrowLightSvg />
								</a>
								<ul className={styles.dropdownList}>
									{el.elements.map((link) => (
										<li key={link}>
											<a href={`/${link.toLocaleLowerCase()}`}>{link}</a>
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>

					<div className={styles.desktopButtons}>
						<a href='/login' className={styles.loginButton}>
							Login
						</a>
						<Button link='/signup' isPrimary>
							Sign Up
						</Button>
					</div>
				</div>
				<div className={styles.mobileMenu}>
					{!isDisplay ? (
						<MenuSvg className={styles.menuSvg} onClick={changeMenu} />
					) : (
						<>
							<CloseMenuSvg className={styles.menuSvg} onClick={changeMenu} />
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
