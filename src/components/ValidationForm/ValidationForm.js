import React from 'react';

import styles from './ValidationForm.module.scss';

import Input from './../UI/Input/Input';

import Spinner from './../UI/Spinner/Spinner';

import {
	registerValidation,
	loginValidation,
} from './../../constants/validationForm';

const ValidationForm = ({
	isLogin,
	submit,
	dataSubmission,
	register,
	errors,
	loading,
}) => {
	const validationFormInputs = isLogin ? loginValidation : registerValidation;

	return (
		<main className={styles.main}>
			<form onSubmit={submit(dataSubmission)}>
				{Object.keys(validationFormInputs).map((inputName) => {
					const { validation, iconClasses, ...rest } = validationFormInputs[
						inputName
					];

					return (
						<Input
							key={inputName}
							{...rest}
							error={errors[inputName]}
							validationRef={register(inputName, validation)}
						/>
					);
				})}

				{loading ? (
					<Spinner />
				) : (
					<button type='submit' className={styles.submitButton}>
						{isLogin ? 'Login' : 'Signup'}{' '}
					</button>
				)}
			</form>
		</main>
	);
};

export default ValidationForm;
