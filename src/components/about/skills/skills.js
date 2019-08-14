import React from 'react';
import { Link } from 'react-router-dom';

import Skill from './skill/skill'

import style from './skills.module.css';

const Skills = () => {

	const skills = [
		{
			id: 0,
			title: 'Front-End',
			icon: '/assets/img/frontend-icon.svg',
			items: ['React/Redux', 'JavaScript (ES6+AJAX)', 'Webpack', 'yarn/npm (+scripts)', 'HTML/CSS (S.C. + Module)']
		},
		{
			id: 1,
			title: 'Back-End',
			icon: '/assets/img/backend-icon.svg',
			items: ['Node.js', 'Express/Hapi', 'MongoDB']
		},
		{
			id: 2,
			title: 'Other',
			icon: '/assets/img/other-skills-icon.svg',
			items: ['GIT (GitHub, Bitbucket)', 'Sketch/Figma', 'WordPress/OpenCart']
		}
	];

	return (
		<div className={style.skills}>
			<h3>
				Навыки
			</h3>
			<div className={style.description}>
				У меня около года опыта в создании многофункциональных веб-приложений. Ниже приведен краткий обзор моих
				основных технических навыков и инструментов, которые я использую. Хочешь узнать больше о моем опыте?
				Посмотри моё<Link to='/resume'> онлайн-резюме</Link>.
			</div>
			<div className={style.container}>
				{skills.map(({id, ...skill}) => <Skill key={id} skill={skill}/>)}
			</div>
		</div>
	);
};

export default Skills;
