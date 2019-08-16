import React from 'react';

import style from './about.module.css';
import TopBar from './top-bar/top-bar';
import Skills from './skills/skills';
import ProjectsMin from './projects-min/projects-min';
import ButtonBar from '../button-bar/button-bar';

const About = ({projects}) => {
	return (
		<div className={style.about}>
			<TopBar/>
			<Skills/>
			<ProjectsMin projects={projects}/>
			<ButtonBar/>
		</div>
	);
};

export default About;
