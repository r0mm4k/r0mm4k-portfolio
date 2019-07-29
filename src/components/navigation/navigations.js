import React from 'react';

import style from './navigation.module.css';

const Navigation = ({nav = []}) => {

	const linksElements = nav.map(({link = '', label = ''}, index) => (<a key={index} href={`/${link}`}>{label}</a>));

	return (
		<nav className={style.nav}>
			{linksElements}
		</nav>
	);
};

export default Navigation;
