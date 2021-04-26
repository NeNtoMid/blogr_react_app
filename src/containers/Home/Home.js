import React, { useMemo } from 'react';

import styles from './Home.module.scss';

import Header from '../../components/Header/Header';

import Content from '../../components/Content/Content';

import Footer from '../../components/Footer/Footer';

import useMenu from './../../hooks/useMenu';

const Home = () => {
	const { isDisplay, handleMenuChange } = useMenu();

	const render = useMemo(
		() => (
			<>
				<Content />
				<Footer />
			</>
		),
		[]
	);
	return (
		<div className={styles.container}>
			<Header isDisplay={isDisplay} changeMenu={handleMenuChange} />
			{render}
		</div>
	);
};

export default Home;
