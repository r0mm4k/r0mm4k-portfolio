import React from 'react';
import { Link } from 'react-router-dom';

import style from './skills.module.css';

import Skill from './skill/skill'

const Skills = () => {

	const skills = [
		{
			id: 0,
			title: 'Front-End',
			icon: '/assets/img/frontend-icon.svg',
			items: ['React/Redux', 'JavaScript (ES6+AJAX)', 'Bootstrap', 'yarn/npm (+scripts)', 'HTML/CSS (S.C. + Module)']
		},
		{
			id: 1,
			title: 'Back-End',
			icon: '/assets/img/backend-icon.svg',
			items: ['Node.js', 'Express/Hapi/Fastify', 'MongoDB', 'Swagger']
		},
		{
			id: 2,
			title: 'Other',
			icon: '/assets/img/other-skills-icon.svg',
			items: ['GIT (GitHub, Bitbucket)', 'HTTP/HTTPS', 'Sketch/Figma', 'WordPress/OpenCart']
		}
	];

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
				{skills.map(({id, ...skill}) => <Skill key={id} skill={skill}/>)}
			</div>
		</div>
	);
};

export default Skills;
