import React from 'react';

import style from './main.module.css';

const Main = () => {
	return (
		<main className={style.main}>
			<div className={style.container}>
				<div className={style.title}>
					<span>Привет!</span>
					<span>Меня зовут Рома Макаров.</span>
					<span>Я Front-End Developer</span>
				</div>
				<div className={style.photo}>
				</div>
			</div>
		</main>
	);
};

export default Main;
