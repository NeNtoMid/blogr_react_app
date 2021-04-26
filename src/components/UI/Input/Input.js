import React from 'react';

import styles from './Input.module.scss';

const Input = ({ ref, error, validationRef, ...rest }) => {
	const errMsg = error ? error.message : null;
	return (
		<div className={styles.container}>
			<input {...rest} {...validationRef} className={error && styles.error} />
			<p> {errMsg}</p>
		</div>
	);
};

export default Input;
