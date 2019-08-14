import React from 'react';

import style from './navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({nav = [], social = []}) => {

	const linksElements = nav.map(({link = '', label = ''}, index) => (
		<NavLink key={index} exact to={link} activeClassName={style.active}>{label}</NavLink>));
	const socialsElements = social.map(({icon = '', link = ''}, index) => (
		<a key={index} href={link}><i className={icon}/></a>));

	return (
		<nav className={style.nav}>
			<div className={style.socials}>
				{socialsElements}
			</div>
			<div className={style.navLinks}>
				{linksElements}
			</div>
		</nav>
	);
};

export default Navigation;
