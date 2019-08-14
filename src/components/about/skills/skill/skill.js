import React from 'react';

import style from './skill.module.css';

const Skill = ({skill: {title = '', icon = '', items = []}}) => {
	return (
		<div className={style.skill}>
			<h4>{title}</h4>
			<div className={style.icon}>
				<img src={icon} alt={title}/>
			</div>
			<div>
				<ul className={style.items}>
					{items.map((item, index) => <li key={index}><i className='fas fa-check icon-cog text-blue'
																												 style={{color: 'Dodgerblue'}}/> {item}</li>)}
				</ul>
			</div>
		</div>
	);
};

export default Skill;
