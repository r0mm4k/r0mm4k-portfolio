import React, { useState } from 'react';

import style from './projects.module.css';

import BottomBar from '../bottom-bar/bottom-bar';
import ProjectCard from './project-card/project-card';

const Projects = ({projects = []}) => {

	const [active, setActive] = useState('All');

	const nav = ['All', 'React', 'Redux', 'Context', 'Node.js'];
	const navElements = nav.map((element, index) => <div
		key={index}
		onClick={() => setActive(element)}
		className={`${style.navElement} ${active === element && style.active}`}>
		{element}
	</div>);

	const filter = (arrProjects, element) => {
		if (element !== 'All') {
			return arrProjects.filter(({skills: {main}}) => main.indexOf(element) > -1);
		}
		return arrProjects;
	};

	return (
		<div className={style.projects}>
			<div className={style.header}>
				<div className={style.container}>
					<h2>Проекты</h2>
					<p>Познакомься с моими работами и изучи мои возможности</p>
				</div>
			</div>
			<section className={style.section}>
				<div className={style.nav}>
					{navElements}
				</div>
				<div className={style.cards}>
					{filter(projects, active).map(({id, ...project}) => <ProjectCard key={id} project={project}/>)}
				</div>
			</section>
			<BottomBar/>
		</div>
	);
};

export default Projects;
