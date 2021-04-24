import React from 'react';

const FooterElement = ({ title, elements }) => {
	return (
		<section>
			<h5>{title}</h5>
			<ul>
				{elements.map((el) => (
					<li key={el}>
						<a href={`/${el.toLowerCase()}`}>{el}</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default FooterElement;
