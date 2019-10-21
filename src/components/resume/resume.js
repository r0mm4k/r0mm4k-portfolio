import React from 'react';

import style from './resume.module.css';
import { Link } from 'react-router-dom';

const ListProjectSkills = ({skills = []}) => {
	const listSkills = skills.map((skill, index) => <li key={index}><span>{skill}</span></li>);
	return (
		<ul className={style.projectSkill}>
			{listSkills}
		</ul>
	)
};
const ListDeveloperSkills = ({nameList = '', skills = []}) => {
	const skillsList = skills.map(({id, name, completed}) => <li key={id}>
		<div className={style.skillName}>{name}</div>
		<div className={style.progress}>
			<div className={style.bar} role='progressbar'
					 style={{width: `${completed}%`}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'/>
		</div>
	</li>);
	return (
		<div className={style.skillItem}>
			<h4>{nameList}</h4>
			<ul className={style.skillLine}>
				{skillsList}
			</ul>
		</div>
	);
};
const ListOtherSkills = ({skills = []}) => {
	const listSkills = skills.map((skill, index) => <li key={index}><span>{skill}</span></li>);
	return (
		<ul className={style.otherSkills}>
			{listSkills}
		</ul>
	)
};
const ListSocialElements = ({social = []}) => {
	const socialBlock = social.map(({id, icon = '', link = '', text = ''}) => (
		<a key={id} href={link}><i className={icon}/>{text}</a>));
	return (
		<div className={style.secondary}>
			{socialBlock}
		</div>
	);
};
const ProjectItem = ({name = '', projectUrl = '', description = '', skills: {full = []}}) => {
	return (
		<div className={style.projects}>
			<h4><Link to={`/${projectUrl}`}>{name}</Link></h4>
			<p>{description}</p>
			<h4>Используемые технологии:</h4>
			<ListProjectSkills skills={full}/>
		</div>
	);
};
const Position = ({id = '', position = '', company = '', timeline: {start, end = 'Настоящее время'}, about = '', informer = '', projects = []}) => {
	const projectsList = projects
		.filter(({positionID}) => positionID === id)
		.map((project) => <ProjectItem key={project.id}{...project}/>);
	return (
		<article className={style.timelineItem}>
			<div className={style.itemHeader}>
				<div className={style.rowHeader}>
					<h3>{position} {informer && <span className={style.informer}>({informer})</span>}</h3>
					<div>{company}</div>
				</div>
				<div className={style.positionTime}>{`${start} - ${end}`}</div>
			</div>
			<div>
				<p>{about}</p>
				{projectsList}
			</div>
		</article>
	);
};
const SideBlock = ({nameBlock, items = []}) => {
	const isLink = (link, text) => <a target='_blank' rel='noopener noreferrer' href={link}>{text}</a>;
	const listItems = [...items.reverse()].map(({id, name, informer, organization, date, link}) => <li key={id}>
		<div className={style.education}>{link ? isLink(link,name) : name} {informer && <span className={style.informer}>({informer})</span>}</div>
		{organization && <div className={style.college}>{organization}</div>}
		{date && <div className={style.date}>{date}</div>}
	</li>);
	return (
		<section>
			<h2>
				{nameBlock}
			</h2>
			<div className={style.sectionContent}>
				<ul className={style.listEducation}>
					{listItems}
				</ul>
			</div>
		</section>
	);
};

const Resume = ({name, image, positions = [], skills: {frontend: frontendSkills, backend: backendSkills, other: otherSkills}, educations = [], searchPosition, languages = [], resume, social: {main, other}, summary, projects = [], courses = []}) => {
	const listPositions = positions.map((position) => <Position key={position.id} {...position} projects={projects}/>);
	return (
		<div className={style.resume}>
			<div className={style.header}>
				<div className={style.container}>
					<h2>Резюме</h2>
					<div className={style.btn}>
						<a target='_blank' rel='noopener noreferrer' href={resume}>
							<i className='fa fa-download  fa-inverse'/>
							Скачать
						</a>
					</div>
				</div>
			</div>
			<article className={style.wrapper}>
				<div className={style.inner}>
					<header>
						<img src={image} alt={name}/>
						<div className={style.title}>
							<div>
								<h1 className={style.name}>{name}</h1>
								<div className={style.slogan}>
									{searchPosition}
								</div>
								<ListSocialElements social={main}/>
							</div>
							<ListSocialElements social={other}/>
						</div>
					</header>
					<div className={style.body}>
						<section>
							<h2>
								Обо мне
							</h2>
							<div className={style.sectionContent}>
								{summary}
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
											{listPositions}
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
										<ListDeveloperSkills nameList={frontendSkills.name} skills={frontendSkills.items}/>
										<ListDeveloperSkills nameList={backendSkills.name} skills={backendSkills.items}/>
										<div className={style.skillItem}>
											<h4>Other</h4>
											<ListOtherSkills skills={otherSkills.items}/>
										</div>
									</div>
								</section>
								<SideBlock nameBlock='ОБРАЗОВАНИЕ' items={educations}/>
								<SideBlock nameBlock='КУРСЫ' items={courses}/>
								<SideBlock nameBlock='ЯЗЫКИ' items={languages}/>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Resume;