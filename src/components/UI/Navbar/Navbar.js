import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

import menuElements from '../../../constants/menuItems';

import Menu from './../../../containers/Menu/Menu';

import { ReactComponent as LogoSvg } from './../../../assets/images/Header/logo.svg';

import { ReactComponent as MenuSvg } from './../../../assets/images/Header/menu.svg';

import { ReactComponent as CloseMenuSvg } from './../../../assets/images/Header/closeMenu.svg';

import { ReactComponent as ArrowLightSvg } from './../../../assets/images/Header/arrowLight.svg';

import Button from './../Button/Button';

import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Navbar = ({ changeMenu, isDisplay }) => {
	const location = useLocation();

	const isAuth = useSelector((state) => state.user.isAuth);

	const render = (
		<nav className={styles.nav}>
			<Link to='/'>
				<LogoSvg />
			</Link>

			<div className={styles.desktopMenu}>
				<ul>
					{menuElements.map((el) => (
						<li key={el.title}>
							{el.title} <ArrowLightSvg />
							<ul className={styles.dropdownList}>
								{el.elements.map((link) => (
									<li key={link}>
										<Link to={`/${link.toLocaleLowerCase()}`}>{link}</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>

				<div className={styles.desktopButtons}>
					{!isAuth ? (
						<>
							<NavLink to='/login' activeClassName={styles.activeLoginButton}>
								Login
							</NavLink>
							<Button
								link='/signup'
								isPrimary={location.pathname === '/signup'}
							>
								Sign Up
							</Button>
						</>
					) : (
						<NavLink to='/logout'>Logout</NavLink>
					)}
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
	);

	return location.pathname !== '/' ? (
		<header className={styles.header}>{render}</header>
	) : (
		render
	);
};

export default Navbar;
