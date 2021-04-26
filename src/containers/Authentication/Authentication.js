import React from 'react';

import ValidationForm from '../../components/ValidationForm/ValidationForm';

import useAuthentication from './../../hooks/Authentication/useAuthentication';

const Authentication = () => {
	const {
		register,
		errors,
		loading,
		location,
		handleSubmit,
		handleGoToPreviousPage,
		handleDataSubmission,
	} = useAuthentication();
	return (
		<ValidationForm
			isLogin={location.pathname === '/login'}
			register={register}
			errors={errors}
			loading={loading}
			submit={handleSubmit}
			dataSubmission={handleDataSubmission}
			goBack={handleGoToPreviousPage}
		/>
	);
};

export default Authentication;
