import React from 'react';
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

const App = () => {

	const projects = [
		{
			id: 0,
			img: '/assets/img/projects/github-finder.png',
			logo: 'GitHub Finder',
			title: 'GitHub Finder',
			link: 'github-finder',
			description: {small: 'Веб-приложение для поиска разработчиков и их репозиториев.', full: ''},
			development: 'Веб-приложение',
			skills: ['React', 'Context', 'Hooks', 'HTML/CSS']
		},
		{
			id: 2,
			img: '/assets/img/projects/portfolio.png',
			logo: 'Portfolio',
			title: 'Portfolio',
			link: 'portfolio',
			description: {small: 'Порфтолию для веб-разработчика с примерами проектов, блогом, формой и резюме.', full: ''},
			development: 'Веб-приложение',
			skills: ['React', 'Context', 'Hooks', 'HTML/CSS']
		},
		{
			id: 3,
			img: '/assets/img/projects/star-db.png',
			logo: 'StarDB',
			title: 'StarDB',
			link: 'stardb',
			description: {small: 'Веб-приложение для поиска героев, планет, кораблей фильма Star Wars.', full: ''},
			development: 'Веб-приложение',
			skills: ['React', 'Redux', 'Bootstrap', 'HTML/CSS']
		}
	];

	return (
		<Router>
			<div className={style.app}>
				<Header/>
				<Switch>
					<Route exact path='/' render={() => <About projects={projects}/>}/>
					<Route exact path='/projects' render={() => <Projects/>}/>
					<Route exact path='/blog' render={() => <Blog/>}/>
					<Route exact path='/resume' render={() => <Resume/>}/>
					<Route exact path='/contacts' render={() => <Contacts/>}/>
					<Route exact path='/:link' render={(props) => <Project {...props} projects={projects}/>}/>
					<Route render={() => <NotFound/>}/>
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
};

export default App;
