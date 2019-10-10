import React from 'react';

import style from './skill.module.css';

const Skill = ( {name = '', icon = '', items = []}) => {
	return (
		<div className={style.skill}>
			<h4>{name}</h4>
			<div className={style.icon}>
				<img src={icon} alt={name}/>
			</div>
			<div>
				<ul className={style.items}>
					{items.map((item, index) => <li key={index}><i className='fas fa-check icon-cog text-blue'
																												 style={{color: '#41A4F5'}}/> {item.name}</li>)}
				</ul>
			</div>
		</div>
	);
};

export default Skill;
