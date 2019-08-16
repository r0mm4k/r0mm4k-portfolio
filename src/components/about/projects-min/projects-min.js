import React from 'react';

import style from './projects-min.module.css';
import ProjectCard from '../../projects/project-card/project-card';
import { Link } from 'react-router-dom';

const ProjectsMin = ({projects = []}) => {
	return (
		<div className={style.projectsMin}>
			<h3>
				Последние проекты
			</h3>
			<div className={style.container}>
				{projects.map(({id, ...project}) => <ProjectCard key={id} project={project}/>)}
			</div>
			<div className={style.btn}>
				<Link to='/projects'>Все проекты</Link>
			</div>
		</div>
	);
};

export default ProjectsMin;
