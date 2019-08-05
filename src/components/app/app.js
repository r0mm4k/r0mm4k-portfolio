import React from 'react';

import style from './app.module.css';

import Header from '../header/header';
import Main from '../main/main';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Slogan from '../slogan/slogan';
import Contacts from '../contacts/contacts';
import Footer from '../footer/footer';

const App = () => {
	return (
		<div className={style.app}>
			<Header/>
			<Main/>
			<Skills/>
			<Projects/>
			<Slogan/>
			<Contacts/>
			<Footer/>
		</div>
	);
};

export default App;
