import React, { Suspense } from 'react';

import PropTypes from 'prop-types';

import Spinner from './../../components/UI/Spinner/Spinner';

import { Route } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
	return (
		<Route {...rest}>
			<Suspense fallback={<Spinner isFloat />}>{children}</Suspense>
		</Route>
	);
};

PublicRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PublicRoute;
