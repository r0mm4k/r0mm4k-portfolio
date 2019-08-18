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
				<ContactForm/>
			</section>
		</div>
	);
};

export default Contacts;

const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };
	}

	/* Here’s the juicy bit for posting the form submission */

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state })
		})
			.then(() => alert("Success!"))
			.catch(error => alert(error));

		e.preventDefault();
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<p>
					<label>
						Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
					</label>
				</p>
				<p>
					<label>
						Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
					</label>
				</p>
				<p>
					<label>
						Message: <textarea name="message" value={message} onChange={this.handleChange} />
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		);
	}
}
