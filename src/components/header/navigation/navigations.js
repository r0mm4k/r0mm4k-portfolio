import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import style from './navigation.module.css';

const Navigation = ({nav = [], social = []}) => {

	const [mobNav, setMobNav] = useState(false);

	const onClickNavBar = () => setMobNav(!mobNav);

	const navItems = nav.map(({link = '', label = ''}, index) => (
		<NavLink key={index} exact to={link} activeClassName={style.active}>{label}</NavLink>));
	const socialItems = social.map(({icon = '', link = ''}, index) => (
		<a key={index} href={link}><i className={icon}/></a>));
	const mobNavElements = nav.map(({link = '', label = ''}, index) => (
		<NavLink key={index} exact to={link} onClick={onClickNavBar} activeClassName={style.active}>{label}</NavLink>));
	const mobItems = mobNav && (<div className={style.mobItems}>{mobNavElements}</div>);

	return (
		<nav className={style.nav}>
			<div className={style.desktopNav}>
				<div className={style.socialItems}>
					{socialItems}
				</div>
				<div className={style.navItems}>
					{navItems}
				</div>
				<div className={`${style.mobNavIcon} ${mobNav && style.rotate}`}>
					<i className='fas fa-bars fa-inverse fa-lg' onClick={onClickNavBar}/>
				</div>
			</div>
			{mobItems}
		</nav>
	);
};

export default Navigation;
