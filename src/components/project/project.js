import React from 'react';

import style from './project.module.css'

const Project = ({projects, match}) => {

	const currentProject = (arrProjects, link) => projects.find((project) => project.projectUrl === link);

	const {image, description, development, name, liveurl, codeurl} = currentProject(projects, match.params.link);

	return (
		<div className={style.project}>
			<div className={style.header}>
				<div className={style.container}>
					<div>
						<h2>{development}</h2>
						<p>{description}</p>
					</div>
					<div className={style.logo}>
						{name}
					</div>
				</div>
			</div>
			<section className={style.section}>
				<div className={style.img}>
					<img src={image} alt={name}/>
				</div>
				<div className={style.btn}>
					<a target='_blank' rel='noopener noreferrer' href={liveurl}><i className='far fa-caret-square-right'/> View
						Live Site</a>
				</div>
				<div className={style.code}>
					<a target='_blank' rel='noopener noreferrer' href={codeurl}><i className='fab fa-github'/> View Code</a>
				</div>
			</section>
		</div>
	);
};

export default Project;