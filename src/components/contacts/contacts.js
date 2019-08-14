import React from 'react';

import style from './contacts.module.css';

import { Link } from 'react-router-dom';

const Contacts = () => {

	const avatar = '/assets/img/avatar.jpg';

	return (
		<div className={style.contacts}>
			<div className={style.header}>
				<h2>Контакты</h2>
			</div>
			<section>
				<div className={style.block}>
					<div className={style.avatar}>
						<img src={avatar} alt='avatar'/>
					</div>
					<div className={style.card}>
						<p>
							В настоящее время я работаю только над своими проектами. Если ты заинтересован в моем найме,
							пожалуйста, используй форму ниже, чтобы связаться. Хочешь знать, как я работаю и что я
							могу предложить? Посмотри мои <Link to='/projects'>проекты</Link> и почитай
							мое <Link to='/resume'>резюме</Link>.
						</p>
						<h6>
							Вы также можете найти меня на следующих сервисах
						</h6>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contacts;
