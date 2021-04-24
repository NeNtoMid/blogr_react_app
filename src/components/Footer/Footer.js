import React from 'react';

import styles from './Footer.module.scss';

import FooterElement from './FooterElement/FooterElement';

import menuItems from './../../constans/menuItems';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h4>Blogr</h4>
			{menuItems.map(({ title, elements }) => (
				<FooterElement title={title} elements={elements} />
			))}
		</footer>
	);
};

export default Footer;
