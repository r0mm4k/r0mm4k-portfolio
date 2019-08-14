import React from 'react';

import style from './button-bar.module.css';
import { Link } from 'react-router-dom';

const ButtonBar = () => {

	const avatar = '/assets/img/avatar.jpg';

	return (
		<div className={style.buttonBar}>
			<div className={style.container}>
				<div className={style.avatar}>
					<img src={avatar} alt='avatar'/>
				</div>
				<div className={style.text}>
					<h3 className={style.title}>
						Хочешь нанять меня для своего проекта?
					</h3>
					<div className={style.description}>
						Ищешь опытного разработчика для создания своего веб-приложения? Чтобы начать общение,
						просто напиши мне на электронную почту <a href='mailto:r0mmm4k@gmail.com'>r0mmm4k@gmail.com</a> или
						используй форму <Link to='/contacts'>на странице контактов</Link>.
					</div>
					<div className={style.btn}>
						<Link to='/contacts'>Ты готов?</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ButtonBar;