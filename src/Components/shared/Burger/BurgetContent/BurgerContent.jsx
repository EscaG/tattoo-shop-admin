import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterRightContent from '../../../Layout/Footer/FooterRight/FooterRightContent';
import Accordion from '../../Accordion/Accordion';
import Autocompleter from '../../Autocompleter/Autocompleter';
import './burgercontent.scss';

export default function BurgerContent({ isActiveMenu, setIsActiveMenu, burgerRef }) {

	const [isOpenAccordion, setIsOpenAccordion] = useState(false)
	const menuContentRef = useRef();

	useEffect(() => {
		//* проверка события на клик, если мимо меню - значит закрыть меню 
		function handleMenu(e) {
			if (!menuContentRef?.current?.contains(e.target) && burgerRef?.current !== e.target) {
				if (burgerRef?.current !== e.target.parentElement) {
					setIsActiveMenu(false);
				}
			}
		}
		if (isActiveMenu) {
			document.addEventListener('click', (e) => { handleMenu(e) })
		}
		return () => document.removeEventListener('click', (e) => { handleMenu(e) })
	}, [isActiveMenu, setIsActiveMenu, burgerRef])




	return (
		<div className={'burger-content ' + (isActiveMenu ? '_active' : '')}
			ref={menuContentRef}
		>
			<div className='burger-content__container'>

				<div className='burger-content__menu-container'>
					<Accordion isOpen={isOpenAccordion} handleClick={setIsOpenAccordion} title={'Каталог'}>
						<ul className='burger-catalog__list'>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Новинки</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Наборы для татуировок</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Тату машинки</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Тату краски</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Тату иглы</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Тату держатели</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Тату наконечники</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Блоки питания</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Педали и провода</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Аксессуары</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Принтеры и планшеты</Link>
							</li>
							<li className='burger-catalog__item'>
								<Link className='burger-catalog__link' to='/'>Защита, ёмкости, расходники</Link>
							</li>

						</ul>
					</Accordion>
					<ul className="burger-small-menu__list">
						<li className="burger-small-menu__item">
							<Link className="burger-small-menu__link" to='/'>Контакты</Link>
						</li>
						<li className="burger-small-menu__item">
							<Link className="burger-small-menu__link" to='/'>Промокоды</Link>
						</li>
						<li className="burger-small-menu__item">
							<Link className="burger-small-menu__link" to='/'>Скидки</Link>
						</li>
						<li className="burger-small-menu__item">
							<Link className="burger-small-menu__link" to='/'>Помощь</Link>
						</li>
						<li className="burger-small-menu__item">
							<Link className="burger-small-menu__link" to='/'>О нас</Link>
						</li>
						<li className="burger-small-menu__item">
							<Link className="burger-small-menu__link" to='/'>Избранное</Link>
						</li>
						<li className="burger-small-menu__item">
							<Link className="burger-small-menu__link" to='/'>Личный кабинет</Link>
						</li>
					</ul>
					<div className='burger-content__autocompleter-block'>
						<Autocompleter
							width={100}
						/>
					</div>
				</div>
				<div className='burger-content__footer'>
					<FooterRightContent />
				</div>
			</div>

		</div>
	)
}
