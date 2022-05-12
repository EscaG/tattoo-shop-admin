import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuList() {
	return (
		<ul className='header-bottom__menu-list header-menu'>
			<li className='header-menu__item'>
				<Link className='header-menu__link' to='/'>Промокоды</Link>
			</li>
			<li className='header-menu__item'>
				<Link className='header-menu__link' to='/'>Скидки</Link>
			</li>
			<li className='header-menu__item'>
				<Link className='header-menu__link' to='/'>Помощь</Link>
			</li>
			<li className='header-menu__item'>
				<Link className='header-menu__link' to='/'>О нас</Link>
			</li>
			<li className='header-menu__item'>
				<Link className='header-menu__link' to='/'>Контакты</Link>
			</li>
		</ul>
	)
}
