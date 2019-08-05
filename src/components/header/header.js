import React from 'react';

import Navigation from './navigation/navigations';

import style from './header.module.css';

const Header = () => {

	const items = [
		{label: 'Домой', link: '/home'},
		{label: 'Проекты', link: '/projects'},
		{label: 'Скилы', link: '/skills'},
		{label: 'Контакты', link: '/contacts'}];

	return (
		<header className={style.header}>
			<div className={style.container}>
				<Navigation nav={items}/>
			</div>
		</header>
	);
};

export default Header;
