import React from 'react';

import style from './contacts.module.css';

import { Link } from 'react-router-dom';

const Contacts = () => {

	const avatar = '/assets/img/avatar.jpg';
	const social = [
		{icon: 'fab fa-linkedin-in fa-inverse fa-lg', bgc: style.linkedin, link: 'https://www.linkedin.com/in/r0mm4k/'},
		{icon: 'fab fa-github fa-inverse fa-lg', bgc: style.github, link: 'https://github.com/r0mmm4k'},
		{icon: 'fab fa-vk fa-inverse fa-lg', bgc: style.vk, link: 'https://vk.com/r0mm4k'},
		{icon: 'fab fa-telegram fa-inverse fa-lg', bgc: style.telegram, link: 'https://t.me/r0mm4k'},
		{icon: 'fab fa-instagram fa-inverse fa-lg', bgc: style.instagram, link: 'https://instagram.com/r0mm4k'}
	];
	const socialsElements = social.map(({icon = '', link = '', bgc = ''}, index) => (
		<a key={index} className={bgc} href={link}><i className={icon}/></a>));

	return (
		<div className={style.contacts}>
			<div className={style.header}>
				<h2>Контакты</h2>
			</div>
			<section className={style.section}>
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
					<div className={style.social}>
						{socialsElements}
					</div>
				</div>
				<form className={style.form} name='contact' method='POST'>
					<input type='hidden' name='form-name' value='contact'/>
					<h3>
						Связаться
					</h3>
					<div className={style.formRow}>
						<div className={style.inputs}>
							<input type='text' className={style.formControl} name='name' placeholder='Name' minLength='2' required/>
							<input type='email' className={style.formControl} name='email' placeholder='Email' required/>
						</div>
						<div className={style.textarea}>
							<textarea className={style.formControl} name='message' placeholder='Enter your message' rows='10'
												required/>
						</div>
						<div className={style.btn}>
							<button type='submit'>Отправить</button>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
};

export default Contacts;
