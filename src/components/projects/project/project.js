import React, { useState } from 'react';

import style from './project.module.css';

const Project = ({project: {img = '', logo = '', title = '', description = '', development = '', skills = []}}) => {

	const [overlay, setOverlay] = useState(true);
	const [overlayDescription, setOverlayDescription] = useState(false);
	const overStyle = overlay ? style.overlay : `${style.overlay} ${style.opacity}`;
	const overDescriptionStyle = overlayDescription ? style.overlayDescription : `${style.overlayDescription} ${style.top}`;

	return (
		<div className={style.project}>
			<div className={style.img}
					 onMouseLeave={() => {
						 setOverlayDescription(false);
						 setOverlay(true);
					 }}>
				<img src={img} alt='logo'/>
				<div className={overStyle} onMouseOver={() => {
					setOverlay(false);
					setOverlayDescription(true);
				}}>
					<div className={style.logo}>
						<span>{logo}</span>
					</div>
				</div>
				<div className={overDescriptionStyle}>
					<h5>
						{title}
					</h5>
					<p>
						{description}
					</p>
				</div>
			</div>
			<div className={style.development}>
				<h4>
					{development}
				</h4>
			</div>
			<div className={style.skills}>
				{skills.map((skill, index) => <div key={index} className={style.skill}>{skill}</div>)}
			</div>
		</div>
	);
};

export default Project;
