import React from 'react';
import { Link } from 'react-router-dom';

import style from './skills.module.css';

import Skill from './skill/skill'

const Skills = ({skills: {frontend: frontendSkills, backend: backendSkills, other: {name, icon}}}) => {
	const otherItems = [
		{id: 0, name: 'GIT (GitHub, Bitbucket)'},
		{id: 1, name: 'HTTP/HTTPS'},
		{id: 2, name: 'Sketch/Figma}'},
		{id: 3, name: 'WordPress/OpenCart'}];
	return (
		<div className={style.skills}>
			<h3>
				Навыки
			</h3>
			<div className={style.description}>
				Интересен мой опыт в создании многофункциональных веб-приложений? Ниже представлен краткий обзор моих
				основных технических навыков и инструментов, которыми я пользуюсь. Хочешь узнать больше?
				Посмотри моё<Link to='/resume'> онлайн-резюме</Link>.
			</div>
			<div className={style.cardsBlock}>
				<Skill {...frontendSkills}/>
				<Skill {...backendSkills}/>
				<Skill name={name} icon={icon} items={otherItems}/>
			</div>
		</div>
	);
};

export default Skills;
