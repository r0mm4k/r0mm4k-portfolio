import React, {useState} from 'react';

import style from './navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({nav = [], social = []}) => {
	const [navBar,setNavBar] = useState(false);

	const onClickNavBar = () => {
		setNavBar(!navBar);
		console.log(navBar);
	};

	const linksElements = nav.map(({link = '', label = ''}, index) => (
		<NavLink key={index} exact to={link} activeClassName={style.active}>{label}</NavLink>));
	const socialsElements = social.map(({icon = '', link = ''}, index) => (
		<a key={index} href={link}><i className={icon}/></a>));
	const navBarList = nav.map(({link = '', label = ''}, index) => (
		<NavLink key={index} exact to={link} onClick={onClickNavBar} activeClassName={style.active}>{label}</NavLink>));

	return (
		<nav className={style.navAll}>
			<div className={style.nav}>
				<div className={style.socials}>
					{socialsElements}
				</div>
				<div className={style.navLinks}>
					{linksElements}
				</div>
				<div className={style.navMob}>
					<i className='fas fa-bars fa-inverse fa-lg' onClick={onClickNavBar}/>
				</div>
			</div>
			{ navBar && (<div className={style.mob}>
				{navBarList}
			</div>)}
		</nav>
	);
};

export default Navigation;
