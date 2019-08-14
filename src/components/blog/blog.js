import React from 'react';

import style from './blog.module.css';
import ButtonBar from '../button-bar/button-bar';

const Blog = () => {
	return (
		<div className={style.blog}>
			<ButtonBar/>
		</div>
	);
};

export default Blog;