import React from 'react';
import { Link } from 'react-router-dom';

import style from './projects-bar.module.css';

import ProjectCard from '../../projects/project-card/project-card';

const ProjectsBar = ({projects = []}) => {
	return (
		<div className={style.projectsBar}>
			<h3>
				Последние проекты
			</h3>
			<div className={style.cardsBlock}>
				{projects
					.filter((e, i, arr) => i >= arr.length - 3)
					.map(({id, ...project}) => <ProjectCard key={id} project={project}/>)}
			</div>
			<div className={style.btn}>
				<Link to='/projects'>Все проекты</Link>
			</div>
		</div>
	);
};

export default ProjectsBar;
