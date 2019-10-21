import style from '../components/contacts/contacts.module.css';

export const DEVELOPER = {
	name: 'Рома Макаров',
	searchPosition: 'Junior Frontend Developer',
	positions: [
		{
			id: 0,
			position: 'Веб-разработчик',
			timeline: {start: 2018},
			informer: 'обучение',
			company: 'Фриланс',
			about: 'Ежедневно прокачиваю старые навыки и изучаю новые, обучаясь новой профессии. Разрабатыю интересные учебные и личных проекты:'
		}],
	image: '/assets/img/avatar.jpg',
	resume: '/assets/pdf/cv_roma_makarov.pdf',
	social: {
		main: [
			{id: 0, icon: 'fa fa-envelope', link: 'mailto:r0mmm4k@gmail.com', text: 'r0mmm4k@gmail.com'},
			{id: 1, icon: 'fa fa-phone', link: 'tel:+375292544449', text: '+375 (29) 254-44-49'}
		],
		contacts: [
			{
				id: 0,
				icon: 'fab fa-linkedin-in fa-inverse fa-lg',
				bgc: style.linkedin,
				link: 'https://www.linkedin.com/in/r0mm4k/'
			},
			{id: 1, icon: 'fab fa-github fa-inverse fa-lg', bgc: style.github, link: 'https://github.com/r0mmm4k'},
			{id: 2, icon: 'fab fa-vk fa-inverse fa-lg', bgc: style.vk, link: 'https://vk.com/r0mm4k'},
			{id: 3, icon: 'fab fa-telegram fa-inverse fa-lg', bgc: style.telegram, link: 'https://t.me/r0mm4k'},
			{id: 4, icon: 'fab fa-instagram fa-inverse fa-lg', bgc: style.instagram, link: 'https://instagram.com/r0mm4k'}
		],
		other: [
			{
				id: 0,
				name: 'linkedin',
				icon: 'fab fa-linkedin-in',
				link: 'https://linkedin.com/in/r0mm4k',
				text: 'linkedin.com/in/r0mm4k'
			},
			{id: 1, name: 'github', icon: 'fab fa-github', link: 'https://github.com/r0mmm4k', text: 'github.com/r0mmm4k'},
			{id: 2, name: 'telegram', icon: 'fab fa-telegram', link: 'https://t.me/r0mm4k', text: 't.me/r0mm4k'},
			{id: 3, name: 'website', icon: 'fa fa-globe', link: 'https://r0mm4k.com', text: 'r0mm4k.com'}
		]
	},
	skills: {
		frontend: {
			name: 'Front-End',
			icon: '/assets/img/frontend-icon.svg',
			items: [
				{
					id: 0,
					name: 'React/Redux',
					completed: 85,
				},
				{
					id: 1,
					name: 'JavaScript (ES6+AJAX)',
					completed: 80,
				},
				{
					id: 2,
					name: 'Bootstrap',
					completed: 70,
				},
				{
					id: 3,
					name: 'yarn/npm (+scripts)',
					completed: 80,
				},
				{
					id: 4,
					name: 'HTML/CSS (S.C. + Module)',
					completed: 85,
				},
			]
		},
		backend: {
			name: 'Back-End',
			icon: '/assets/img/backend-icon.svg',
			items: [
				{
					id: 0,
					name: 'Node.js',
					completed: 55,
				},
				{
					id: 1,
					name: 'Express/Hapi/Fastify',
					completed: 50,
				},
				{
					id: 2,
					name: 'MongoDB',
					completed: 50,
				},
				{
					id: 3,
					name: 'Swagger',
					completed: 40,
				}
			]
		},
		other: {
			name: 'Other',
			icon: '/assets/img/other-skills-icon.svg',
			items: ['Figma', 'Git', 'WebStorm', 'OpenCart', 'Sketch', 'REST', 'WordPress', 'HTTP/HTTPS']
		}
	},
	educations: [
		{
			id: 0,
			name: 'Building Engineer',
			organization: 'Belarusian National Technical University',
			date: '2015 - 2021',
			link: 'https://en.bntu.by/civil-engineering-faculty'
		}
	],
	courses: [
		{
			id: 0,
			name: 'Web-Developer: React Redux Node.js',
			organization: 'IT-INCUBATOR',
			date: 'Sep. 2019',
			link: 'https://it-incubator.by'
		},
		{
			id: 1,
			name: 'Front-End Web Development with React',
			organization: 'Coursera',
			date: 'Oct. 2019',
			link: 'https://www.coursera.org/account/accomplishments/verify/ZQH7NTDPA3VD'
		},
		{
			id: 2,
			name: 'React + Redux - Профессиональная Разработка',
			organization: 'Udemy',
			date: 'Oct. 2019',
			link: 'https://www.udemy.com/certificate/UC-3IV43S39'
		},
	],
	languages: [
		{
			id: 0,
			name: 'Белорусский',
			informer: 'Родной'
		},
		{
			id: 1,
			name: 'Русский',
			informer: 'Родной'
		},
		{
			id: 2,
			name: 'English',
			informer: 'A2: Elementary'
		}
	],
	summary: 'Я начинающий веб разработчик. Владею актуальным набором технологий в области Front-End, параллельно изучаю Back-End. Готов начать свой трудовой путь в сфере веб разработки, где смогу получить и использовать больше знаний и практического опыта. Имею большой интерес и желание достичь профессионального уровня.'
};