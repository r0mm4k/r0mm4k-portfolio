import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './project-card.module.css';

const ProjectCard = ({project: {image = '', name = '', projectUrl = '', description = '', development = '', skills: {main: skills = ''}}}) => {

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
				<img src={image} alt='logo'/>
				<div className={overStyle} onMouseEnter={() => {
					setOverlay(false);
					setOverlayDescription(true);
				}}>
					<div className={style.logo}>
						<span>{name}</span>
					</div>
				</div>
				<Link to={`/${projectUrl}`}>
					<div className={overDescriptionStyle}>
						<h5>
							{name}
						</h5>
						<p>
							{description}
						</p>
					</div>
				</Link>
			</div>
			<div className={style.development}>
				<h4>
					<Link to={`/${projectUrl}`}>
						{development}
					</Link>
				</h4>
			</div>
			<div className={style.skills}>
				{skills.map((skill, index) => <div key={index} className={style.skill}>{skill}</div>)}
			</div>
		</div>
	);
};

export default ProjectCard;
