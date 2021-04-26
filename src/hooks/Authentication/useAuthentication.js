import { useState } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { registerUser, loginUser } from './../../store/actions/user';

import { useDispatch } from 'react-redux';

const useAuthentication = () => {
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	const history = useHistory();

	const location = useLocation();

	const handleGoToPreviousPage = () => {
		history.goBack();
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();
	console.log('errors:', errors);

	const handleDataSubmission = async (data) => {
		console.log('data:', data);
		if (data.re_pass && data.pass.toString() !== data.re_pass.toString()) {
			return setError('re_pass', {
				type: 'manual',
				message: 'Passwords are not the same',
			});
		}
		setLoading(true);
		if (data.re_pass) {
			const registerData = {
				username: data.name,
				password: data.pass,
				email: data.email,
			};

			await dispatch(registerUser(registerData));
		} else {
			const loginData = {
				identifier: data.email,
				password: data.pass,
			};
			await dispatch(loginUser(loginData));
		}

		setLoading(false);

		history.replace('/');
	};

	return {
		register,
		errors,
		loading,
		location,
		handleSubmit,
		handleGoToPreviousPage,
		handleDataSubmission,
	};
};

export default useAuthentication;
