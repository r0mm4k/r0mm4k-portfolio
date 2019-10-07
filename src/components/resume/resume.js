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
						<a target='_blank' rel='noopener noreferrer' href='/assets/pdf/cv_roma_makarov.pdf'>
							<i className='fa fa-download  fa-inverse'/>
							Скачать
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
										Junior Frontend Developer
									</div>
									<div>
										<a style={{marginBottom: '.8rem'}} href='mailto:r0mmm4k@gmail.com'><i
											style={{paddingLeft: '.02rem'}}
											className='fa fa-envelope'/>r0mmm4k@gmail.com</a>
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
								Обо мне
							</h2>
							<div>
								Я начинающий веб разработчик. Владею актуальным набором технологий в области Front-End, параллельно
								изучаю Back-End. Готов начать свой трудовой путь в сфере веб разработки, где смогу получить и
								использовать больше знаний и практического опыта. Имею большой интерес и желание достичь
								профессионального уровня.
							</div>
						</section>
						{/*<div className={style.row}>
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
						</div>*/}
					</div>
				</div>
			</article>
		</div>
	);
};

export default Resume;