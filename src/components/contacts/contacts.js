import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './contacts.module.css';

const Contacts = ({image, social}) => {

	const [state, setState] = useState({name: '', email: '', message: ''});
	const {name, email, message} = state;

	const handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: encode({"form-name": "contact", ...state})
		})
			.then(() => {
				setState({name: '', email: '', message: ''});
				alert("Success!");
			})
			.catch(error => alert(error));

		e.preventDefault();
	};

	const handleChange = e => setState({...state, [e.target.name]: e.target.value});

	const encode = (data) => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	};

	const socialsElements = social.map(({id, icon = '', link = '', bgc = ''}) => (
		<a key={id} className={bgc} href={link}><i className={icon}/></a>));

	return (
		<div className={style.contacts}>
			<div className={style.header}>
				<div className={style.container}>
					<h2>Контакты</h2>
				</div>
			</div>
			<section className={style.section}>
				<div className={style.avatar}>
					<img src={image} alt='avatar'/>
				</div>
				<div className={style.card}>
					<p>
						В настоящее время я работаю над своими проектами. Если ты заинтересован в моем найме,
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
				<form className={style.form} name='contact' method='POST' onSubmit={handleSubmit}>
					<input type='hidden' name='form-name' value='contact'/>
					<h3>
						Связаться
					</h3>
					<div className={style.formRow}>
						<div className={style.inputs}>
							<input type='text' className={style.formControl} name='name' value={name} onChange={handleChange}
										 placeholder='Name' minLength='2' required/>
							<input type='email' className={style.formControl} name='email' value={email} onChange={handleChange}
										 placeholder='Email' required/>
						</div>
						<div className={style.textarea}>
							<textarea className={style.formControl} name='message' value={message} onChange={handleChange}
												placeholder='Enter your message' rows='10'
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
