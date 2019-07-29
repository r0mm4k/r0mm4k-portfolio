import React from 'react';

import style from './app.module.css';

import Header from '../header/header';
import Main from '../main/main';
import Skills from '../skills/skills';

const App = () => {
	return (
		<div className={style.app}>
			<Header/>
			<Main/>
			<Skills/>
		</div>
	);
};

export default App;
