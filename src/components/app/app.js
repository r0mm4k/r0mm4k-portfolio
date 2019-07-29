import React from 'react';

import style from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';

const App = () => {
	return (
		<div className={style.app}>
			<Header/>
			<Main/>
		</div>
	);
};

export default App;
