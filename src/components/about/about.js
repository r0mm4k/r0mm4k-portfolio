import React from 'react';

import style from './about.module.css';
import TopBar from './top-bar/top-bar';
import Skills from './skills/skills';
import ProjectsBar from './projects-bar/projects-bar';
import BottomBar from '../bottom-bar/bottom-bar';

const About = ({projects, name, skills}) => {
	return (
		<div className={style.about}>
			<TopBar name={name}/>
			<Skills skills={skills}/>
			<ProjectsBar projects={projects}/>
			<BottomBar/>
		</div>
	);
};

export default About;
