import React from 'react';

import Navigation from '../navigation/navigations';

import style from './header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.container}>
				<Navigation nav={[
					{label: 'Домой', link: '/home'},
					{label: 'Проекты', link: '/projects'},
					{label: 'Скилы', link: '/skills'},
					{label: 'Контакты', link: '/contacts'}]}/>
			</div>
		</header>
	);
};

export default Header;
