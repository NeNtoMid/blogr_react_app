import React, { useState, useMemo } from 'react';

import styles from './Home.module.scss';

import Header from '../../components/Header/Header';

import Content from '../../components/Content/Content';

import Footer from '../../components/Footer/Footer';

const Home = () => {
	const [isDisplay, setIsDisplay] = useState(false);

	const handleMenuChange = () => {
		setIsDisplay((prevState) => !prevState);
	};

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
