import React, { lazy, useEffect, Suspense } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import PublicRoute from './hoc/PublicRoute/PublicRoute';

import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';

import { checkUserAuthentication } from './store/actions/index';

import { useDispatch, useSelector } from 'react-redux';

import Spinner from './components/UI/Spinner/Spinner';

const Home = lazy(() => import('./containers/Home/Home'));

const Authenication = lazy(() =>
	import('./containers/Authentication/Authentication')
);

const Logout = lazy(() => import('./components/Logout/Logout'));

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserAuthentication());
	}, [dispatch]);

	const isAuth = useSelector((state) => state.user.isAuth);

	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute path='/' exact>
					<Home />
				</PublicRoute>
				<Layout>
					<Route path={['/signup', '/login']}>
						<Suspense fallback={<Spinner />}>
							{!isAuth ? <Authenication /> : <Redirect exact to='/' />}
						</Suspense>
					</Route>

					<PrivateRoute exact path='/logout'>
						<Logout />
					</PrivateRoute>
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
