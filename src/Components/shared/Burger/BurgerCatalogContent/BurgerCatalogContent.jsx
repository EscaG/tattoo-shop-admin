import React, { useEffect, useRef, useState } from 'react';
import Brands from './Brands/Brands';
import './catalog.scss';
import Categories from './Categories/Categories';

export default function BurgerCatalogContent({ isActiveMenu, setIsActiveMenu, burgerRef }) {

	const [isCheckedButton, setIsCheckedButton] = useState('categories')
	const menuCatalogRef = useRef();

	useEffect(() => {
		//* проверка события на клик, если мимо меню - значит закрыть меню 
		function handleMenu(e) {
			console.log('isActiveMenu');
			if (!menuCatalogRef?.current?.contains(e.target) && burgerRef?.current !== e.target) {
				if (burgerRef?.current !== e.target.parentElement) {
					setIsActiveMenu(false);
				}
			}
		}
		if (isActiveMenu) {
			document.addEventListener('click', handleMenu)
		}
		return () => document.removeEventListener('click', handleMenu)
	}, [burgerRef, isActiveMenu, setIsActiveMenu]);


	return (
		<div
			className={'burger-catalog-content ' + (isActiveMenu ? '_active' : '')}
			ref={menuCatalogRef}
		>
			<div className='burger-catalog-content__buttons buttons-catalog'>
				<input type="radio"
					id="buttons-catalog__categories"
					name="buttons-catalog"
					value='categories'
					checked={isCheckedButton === 'categories' ? true : false}
					onChange={e => setIsCheckedButton(e.target.value)}
				/>
				<label htmlFor="buttons-catalog__categories"><span>По категории</span></label>
				<input type="radio"
					id="buttons-catalog__brands"
					name="buttons-catalog"
					value='brands'
					checked={isCheckedButton === 'brands' ? true : false}
					onChange={e => setIsCheckedButton(e.target.value)}
				/>
				<label htmlFor="buttons-catalog__brands"><span>По брендам</span></label>
				{/* <button className='buttons-catalog__categories'>По категории</button>
				<button className='buttons-catalog__brands'>По брендам</button> */}
			</div>
			<div className='burger-catalog-content__content '>
				{isCheckedButton === 'categories' ?
					<Categories />
					:
					<Brands />
				}
			</div>
		</div>
	)
}
