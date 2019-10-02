import React from 'react';

import style from './resume.module.css';

const Resume = () => {

	const avatar = '/assets/img/avatar.jpg';
	const social = [
		{icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/r0mm4k', text: 'linkedin.com/in/r0mm4k'},
		{icon: 'fab fa-github', link: 'https://github.com/r0mmm4k', text: 'github.com/r0mmm4k'},
		{icon: 'fab fa-telegram', link: 'https://t.me/r0mm4k', text: 't.me/r0mm4k'},
		{icon: 'fa fa-globe', link: 'https://r0mm4k.com', text: 'r0mm4k.com'}
	];
	const socialsElements = social.map(({icon = '', link = '', bgc = '', text = ''}, index) => (
		<a key={index} href={link}><i className={icon}/>{text}</a>));
	return (
		<div className={style.resume}>
			<div className={style.header}>
				<div className={style.container}>
					<h2>Резюме</h2>
					<div className={style.btn}>
						<a target='_blank' rel='noopener noreferrer' href='/'>
							<i className='fa fa-download  fa-inverse'/>
							Скачать PDF-версию
						</a>
					</div>
				</div>
			</div>
			<article className={style.wrapper}>
				<div className={style.inner}>
					<header>
						<img src={avatar} alt='avatar'/>
						<div className={style.title}>
							<div className={style.primary}>
								<h1 className={style.name}> Рома Макаров</h1>
								<div className={style.slogan}>
									Web-developer
								</div>
								<div>
									<a href='mailto:r0mmm4k@gmail.com'><i style={{paddingLeft: '.02rem'}} className='fa fa-envelope'/>r0mmm4k@gmail.com</a>
								</div>
								<div>
									<a href='tel:+375292544449'><i className='fa fa-phone'/>+375 (29) 254-44-49</a>
								</div>
							</div>
							<div className={style.secondary}>
								{socialsElements}
							</div>
						</div>
					</header>
					<div className={style.body}>
						<section>
							<h2>
								ОПЫТ РАБОТЫ
							</h2>
							<div>
								Я начинающий web-developer, специализирующийся на front-end, back-end и разработке одностраничных
								приложений (SPA). Коммерческого опыта по специальности нет. Опыт получаю на своих проектах. Готов упорно
								работать и обучаться для достижения своих целей!
							</div>
						</section>
						<div className={style.row}>
							<div className={style.left}>
								<section>
									<h2>
										РАБОЧИЙ СТАЖ
									</h2>
									<div>

									</div>
								</section>
							</div>
							<div className={style.right}>
								<section>
									<h2>
										НАВЫКИ
									</h2>
									<div>

									</div>
								</section>
								<section>
									<h2>
										ОБРАЗОВАНИЕ
									</h2>
									<div>

									</div>
								</section>
								<section>
									<h2>
										КУРСЫ
									</h2>
									<div>

									</div>
								</section>
								<section>
									<h2>
										ЯЗЫКИ
									</h2>
									<div>

									</div>
								</section>
								<section>
									<h2>
										ИНТЕРЕСЫ
									</h2>
									<div>

									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Resume;