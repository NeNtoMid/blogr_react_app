import React from 'react';

import PropTypes from 'prop-types';

import Navbar from './../../components/UI/Navbar/Navbar';

import useMenu from './../../hooks/useMenu';

import Footer from '../../components/Footer/Footer';

const Layout = ({ children }) => {
	const { isDisplay, handleMenuChange } = useMenu();

	return (
		<>
			<Navbar changeMenu={handleMenuChange} isDisplay={isDisplay} />
			{children}
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
