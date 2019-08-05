import React from 'react';

import style from './footer.module.css';

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={style.container}>
				<span className={style.title}>
					Рома Макаров
				</span>
				<div className={style.social}>
					<div className={style.item}>
					</div>
					<div className={style.item}>
					</div>
					<div className={style.item}>
					</div>
					<div className={style.item}>
					</div>
				</div>
				<span className={style.copyright}>
					© 2019 r0mm4k.com, All Rights Reserved.
				</span>
			</div>
		</div>
	);
};

export default Footer;