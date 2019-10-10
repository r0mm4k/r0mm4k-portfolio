import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import style from './app.module.css';

import Header from '../header/header';
import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';
import About from '../about/about';
import Projects from '../projects/projects';
import Resume from '../resume/resume';
import Blog from '../blog/blog';
import NotFound from '../not-found/not-found';
import Project from '../project/project';

import { PROJECTS } from '../../shared/projects';
import { DEVELOPER } from '../../shared/developer';

const App = () => {
	const [state] = useState({projects: PROJECTS, developer: DEVELOPER});
	const {projects, developer} = state;

	return (
		<Router>
			<div className={style.app}>
				<Header/>
				<Switch>
					<Route exact path='/'
								 render={() => <About name={developer.name} skills={developer.skills} projects={projects}/>}/>
					<Route exact path='/projects' render={() => <Projects projects={projects}/>}/>
					<Route exact path='/blog' render={() => <Blog/>}/>
					<Route exact path='/resume' render={() => <Resume {...developer} projects={projects}/>}/>
					<Route exact path='/contacts'
								 render={() => <Contacts image={developer.image} social={developer.social.contacts}/>}/>
					<Route exact path='/:link' render={(props) => <Project {...props} projects={projects}/>}/>
					<Route render={() => <NotFound/>}/>
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
};

export default App;
