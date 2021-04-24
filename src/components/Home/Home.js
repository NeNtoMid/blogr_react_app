import React from 'react';

import styles from './Home.module.scss';

import Header from './../Header/Header';

import Content from './../Content/Content';

import Footer from './../Footer/Footer';

const Home = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default Home;
