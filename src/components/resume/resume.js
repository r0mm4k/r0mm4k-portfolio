import React from 'react';

import style from './resume.module.css';

const ListProjectSkills = ({skills = []}) => {
	const listSkills = skills.map((skill, index) => <li key={index}><span>{skill}</span></li>);
	return (
		<ul className={style.projectSkill}>
			{listSkills}
		</ul>
	)
};
const ListOtherSkills = ({skills = []}) => {
	const listSkills = skills.map((skill, index) => <li key={index}><span>{skill}</span></li>);
	return (
		<ul className={style.otherSkills}>
			{listSkills}
		</ul>
	)
};

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
							<div className={style.sectionContent}>
								Я начинающий веб разработчик. Владею актуальным набором технологий в области Front-End, параллельно
								изучаю Back-End. Готов начать свой трудовой путь в сфере веб разработки, где смогу получить и
								использовать больше знаний и практического опыта. Имею большой интерес и желание достичь
								профессионального уровня.
							</div>
						</section>
						<div className={style.row}>
							<div className={style.left}>
								<section>
									<h2>
										ОПЫТ РАБОТЫ
									</h2>
									<div className={style.sectionContent}>
										<div className={style.timeline}>
											<article className={style.timelineItem}>
												<div className={style.itemHeader}>
													<div className={style.rowHeader}>
														<h3>Веб-разработчик <span className={style.informer}>(обучение)</span></h3>
														<div>Фриланс</div>
													</div>
													<div className={style.positionTime}>2018 - Настоящее время</div>
												</div>
												<div className={style.itemDescription}>
													<p>
														Ежедневно прокачиваю старые навыки и изучаю новые, обучаясь новой профессии. Разрабатыю
														интересные учебные и личных проекты:
													</p>
													<div className={style.projects}>
														<h4>ToDo List</h4>
														<p>
															Веб-приложение для хранения списка заданий.
														</p>
														<h4>Используемые технологии:</h4>
														<ListProjectSkills
															skills={['HTML/CSS', 'JS (ES6+)', 'React', 'Redux', 'Axios', 'Thunk', 'Bootstrap',
																'Webpack', 'NPM', 'git']}/>
													</div>
													<div className={style.projects}>
														<h4>GitHub Finder</h4>
														<p>
															Веб-приложение для поиска разработчиков и их репозиториев.
														</p>
														<h4>Используемые технологии:</h4>
														<ListProjectSkills
															skills={['HTML/CSS', 'JS (ES6+)', 'React', 'Context', 'Axios', 'PropTypes', 'Bootstrap',
																'Webpack', 'Hooks', 'React Router', 'NPM', 'git']}/>
													</div>
													<div className={style.projects}>
														<h4>Portfolio</h4>
														<p>
															Порфтолию для веб-разработчика с примерами проектов, блогом, формой и резюме.
														</p>
														<h4>Используемые технологии:</h4>
														<ListProjectSkills
															skills={['HTML/CSS (modules)', 'JS (ES6+)', 'React', 'Context', 'Webpack', 'Hooks',
																'React Router', 'NPM', 'git']}/>
													</div>
													<div className={style.projects}>
														<h4>Confusion</h4>
														<p>
															Веб-сайт для ресторана.
														</p>
														<h4>Используемые технологии:</h4>
														<ListProjectSkills
															skills={['HTML/CSS (modules)', 'JS (ES6+)', 'React', 'Redux', 'Fetch', 'Redux Form',
																'Webpack', 'Hooks', 'Bootstrap', 'Thunk', 'React Animation', 'React Transition',
																'React Router', 'NPM', 'git']}/>
													</div>
													<div className={style.projects}>
														<h4>StarDB</h4>
														<p>
															Веб-приложение для поиска героев, планет, кораблей фильма Star Wars.
														</p>
														<h4>Используемые технологии:</h4>
														<ListProjectSkills
															skills={['HTML/CSS', 'JS (ES6+)', 'React', 'Redux', 'Axios',
																'Webpack', 'Hooks', 'Bootstrap', 'Thunk', 'React Router', 'NPM', 'git']}/>
													</div>
												</div>
											</article>
										</div>
									</div>
								</section>
							</div>
							<div className={style.right}>
								<section>
									<h2>
										НАВЫКИ
									</h2>
									<div className={style.sectionContent}>
										<div className={style.skillItem}>
											<h4>Frontend</h4>
											<ul className={style.skillLine}>
												<li>
													<div className={style.skillName}>React/Redux</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '95%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
												<li>
													<div className={style.skillName}>JavaScript (ES6+AJAX)</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '91%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
												<li>
													<div className={style.skillName}>Bootstrap</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '85%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
												<li>
													<div className={style.skillName}>yarn/npm (+scripts)</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '83%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
												<li>
													<div className={style.skillName}>HTML/CSS (S.C. + Module)</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '91%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
											</ul>
										</div>
										<div className={style.skillItem}>
											<h4>Backend</h4>
											<ul className={style.skillLine}>
												<li>
													<div className={style.skillName}>Node.js</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '65%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
												<li>
													<div className={style.skillName}>Express/Hapi/Fastify</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '55%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
												<li>
													<div className={style.skillName}>MongoDB</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '80%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
												<li>
													<div className={style.skillName}>Swagger</div>
													<div className={style.progress}>
														<div className={style.bar} role='progressbar'
																 style={{width: '45%'}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
													</div>
												</li>
											</ul>
										</div>
										<div className={style.skillItem}>
											<h4>Other</h4>
											<ListOtherSkills skills={['Figma', 'Git', 'WebStorm', 'OpenCart', 'Sketch', 'REST', 'WordPress',
												'HTTP/HTTPS']}/>
										</div>
									</div>
								</section>
								<section>
									<h2>
										ОБРАЗОВАНИЕ
									</h2>
									<div className={style.sectionContent}>
										<ul className={style.listEducation}>
											<li>
												<div className={style.education}>Building Engineer</div>
												<div className={style.college}>Belarusian National Technical University</div>
												<div className={style.date}>2015 - 2021</div>
											</li>
										</ul>
									</div>
								</section>
								<section>
									<h2>
										КУРСЫ
									</h2>
									<div className={style.sectionContent}>
										<ul className={style.listEducation}>
											<li>
												<div className={style.education}>Front-End Web Development with React</div>
												<div className={style.college}>Coursera</div>
												<div className={style.date}>Oct. 2019</div>
											</li>
											<li>
												<div className={style.education}>Web-Developer: React Redux Node.js</div>
												<div className={style.college}>IT-INCUBATOR</div>
												<div className={style.date}>Sep. 2019</div>
											</li>
										</ul>
									</div>
								</section>
								<section>
									<h2>
										ЯЗЫКИ
									</h2>
									<div className={style.sectionContent}>
										<ul className={style.listEducation}>
											<li>
												<div className={style.education}>English <span
													className={style.informer}>(A2: Elementary)</span></div>
											</li>
											<li>
												<div className={style.education}>Русский <span className={style.informer}>(Родной)</span></div>
											</li>
											<li>
												<div className={style.education}>Белорусский <span className={style.informer}>(Родной)</span>
												</div>
											</li>
										</ul>
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