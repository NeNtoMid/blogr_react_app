import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const useMenu = () => {
	const [isDisplay, setIsDisplay] = useState(false);

	const handleMenuChange = () => {
		setIsDisplay((prevState) => !prevState);
	};

	const location = useLocation();

	useEffect(() => {
		setIsDisplay(false);
	}, [location.pathname]);

	return { isDisplay, handleMenuChange };
};

export default useMenu;
