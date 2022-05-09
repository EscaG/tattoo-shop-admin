import React from 'react';
import { Link } from 'react-router-dom';
import './footerleft.scss';
import logo from '../../../../assets/images/logo.png';

export default function FooterLeft() {
	return (
		<section className='footer__left left-footer '>
			{/* //? ЛОГО + политика*/}
			<div className=''>
				<div className='footer-logo'>
					<Link className='footer-logo__logo-link' to='/'>
						<img className='footer-logo__logo-img' src={logo} alt="logo" />
					</Link>
				</div>
				<div className='left-footer__politics'>
					<Link to='/'>Политика конфиденциальности</Link>
				</div>
			</div>
			{/* //? МЕНЮ*/}
			<div className='footer-left__menu '>
				<div className='menu-footer'>
					<ul className='menu-footer__list'>
						<li className='menu-footer__item'>
							<Link className='menu-footer__link' to='/'>Промокоды</Link>
						</li>
						<li className='menu-footer__item'>
							<Link className='menu-footer__link' to='/'> Скидки</Link>
						</li>
						<li className='menu-footer__item'>
							<Link className='menu-footer__link' to='/'> Помощь</Link>
						</li>
					</ul>
					<ul className='menu-footer__list'>
						<li className='menu-footer__item'>
							<Link className='menu-footer__link' to='/'>О нас</Link>
						</li>
						<li className='menu-footer__item'>
							<Link className='menu-footer__link' to='/'>Контакты</Link>
						</li>
					</ul>
				</div>

			</div>
		</section>
	)
}
