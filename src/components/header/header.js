import React from 'react';

import style from './header.module.css';
import Navigation from './navigation/navigations';

const Header = () => {

	const nav = [
		{label: 'ОБО МНЕ', link: '/'},
		{label: 'ПРОЕКТЫ', link: '/projects'},
		{label: 'БЛОГ', link: '/blog'},
		{label: 'РЕЗЮМЕ', link: '/resume'},
		{label: 'КОНТАКТЫ', link: '/contacts'}];

	const social = [
		{icon: 'fab fa-linkedin-in fa-inverse', link: 'https://www.linkedin.com/in/r0mm4k/'},
		{icon: 'fab fa-github fa-inverse', link: 'https://github.com/r0mmm4k'},
		{icon: 'fab fa-vk fa-inverse', link: 'https://vk.com/r0mm4k'},
		{icon: 'fab fa-telegram fa-inverse', link: 'https://t.me/r0mm4k'},
		{icon: 'fab fa-instagram fa-inverse', link: 'https://instagram.com/r0mm4k'}
	];

	return (
		<div className={style['top-bar']}>
			<Navigation nav={nav} social={social}/>
		</div>
	);
};

export default Header;
