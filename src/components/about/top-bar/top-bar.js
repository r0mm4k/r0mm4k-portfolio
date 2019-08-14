import React from 'react';

import style from './top-bar.module.css';
import { Link } from 'react-router-dom';

const TopBar = () => {

	const avatar = '/assets/img/avatar.jpg';

	return (
		<div className={style.topBar}>
			<div className={style.container}>
				<div className={style.avatar}>
					<img src={avatar} alt='avatar'/>
				</div>
				<div className={style.text}>
					<div className={style.lead}>
						Привет, меня зовут
					</div>
					<h2 className={style.name}>
						Рома Макаров
					</h2>
					<div className={style.description}>
						Я web-developer, специализирующийся на front-end разработке и разработке SPA приложений.
						Я пишу о веб-разработке в своем <Link to='/blog'>блоге</Link>. Хочешь узнать, как я могу помочь твоему
						проекту?
						Смотри мои <Link to='/projects'>работы</Link> и изучай моё <Link to='/resume'>резюме</Link>.
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