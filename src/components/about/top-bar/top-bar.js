import React from 'react';
import { Link } from 'react-router-dom';

import style from './top-bar.module.css';

const TopBar = () => {

	const avatar = '/assets/img/avatar.jpg';

	return (
		<div className={style.topBar}>
			<div className={style.container}>
				<div className={style.avatar}>
					<img src={avatar} alt='avatar'/>
				</div>
				<div className={style.text}>
					<div className={style.hello}>
						Привет, меня зовут
					</div>
					<h1 className={style.name}>
						Рома Макаров
					</h1>
					<div className={style.description}>
						Я начинающий веб разработчик. Владею актуальным набором технологий в области Front-End, параллельно изучаю
						Back-End. Пишу о веб-разработке в своем <Link to='/blog'>блоге</Link>. Хочешь узнать,
						как я могу помочь твоему проекту? Смотри мои <Link to='/projects'>работы</Link> и
						изучай моё <Link to='/resume'>резюме</Link>.
					</div>
					<div className={style.btn}>
						<Link to='/contacts'>Нанять Меня</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;