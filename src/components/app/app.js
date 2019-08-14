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

const App = () => {
	return (
		<Router>
			<div className={style.app}>
				<Header/>
				<Switch>
					<Route exact path='/' render={() => <About/>}/>
					<Route exact path='/projects' render={() => <Projects/>}/>
					<Route exact path='/blog' render={() => <Blog/>}/>
					<Route exact path='/resume' render={() => <Resume/>}/>
					<Route exact path='/contacts' render={() => <Contacts/>}/>
					<Route render={() => <NotFound/>}/>
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
};

export default App;
