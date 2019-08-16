import React from 'react';

import style from './projects-min.module.css';
import Project from '../../projects/project/project';
import { Link } from 'react-router-dom';

const ProjectsMin = () => {

	const projects = [
		{
			id: 0,
			img: '/assets/img/projects/github-finder.jpg',
			logo: 'GitHub Finder',
			title: 'GitHub Finder',
			description: 'Веб-приложение для поиска профилей разработчиков и их репозиториев.',
			development: 'Веб-приложение',
			skills: ['React', 'Context', 'Hooks', 'HTML/CSS']
		},
		{
			id: 2,
			img: '/assets/img/projects/portfolio.jpg',
			logo: 'Portfolio',
			title: 'Portfolio',
			description: 'Порфтолию для веб-разработчика с примерами проектов, блогом, формой и резюме.',
			development: 'Веб-приложение',
			skills: ['React', 'Context', 'Hooks', 'HTML/CSS']
		},
		{
			id: 3,
			img: '/assets/img/projects/star-db.jpg',
			logo: 'StarDB',
			title: 'StarDB',
			description: 'Веб-приложение для поиска героев, планет, кораблей сериала Star Wars.',
			development: 'Веб-приложение',
			skills: ['React', 'Redux', 'Bootstrap', 'HTML/CSS']
		}
	];

	return (
		<div className={style.projectsMin}>
			<h3>
				Избранные проекты
			</h3>
			<div className={style.container}>
				{projects.map(({id, ...project}) => <Project key={id} project={project}/>)}
			</div>
			<div className={style.btn}>
				<Link to='/projects'>Все проекты</Link>
			</div>
		</div>
	);
};

export default ProjectsMin;
