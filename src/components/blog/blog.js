import React from 'react';

import style from './blog.module.css';
import BottomBar from '../bottom-bar/bottom-bar';

const Blog = () => {
	return (
		<div className={style.blog}>
			<BottomBar/>
		</div>
	);
};

export default Blog;