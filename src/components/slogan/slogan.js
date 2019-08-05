import React from 'react';

import style from './slogan.module.css';

const Slogan = () => {
	return (
		<main className={style.slogan}>
			<div className={style.container}>
				<span className='title'>
					Рассматриваю варианты удаленной работы
				</span>
				<button className='btn'>
					Нанять меня
				</button>
			</div>
		</main>
	);
};

export default Slogan;
