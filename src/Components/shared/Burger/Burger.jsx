import React, { useRef } from 'react';
import './burger.scss';

export default function Burger({ isActiveMenu, setIsActiveMenu, setBurgerRef }) {
	const burger = useRef();

	const handlerChange = () => {
		setIsActiveMenu(!isActiveMenu);
		setBurgerRef(burger);
	}

	return (
		<div
			className={"adaptive-menu__icon-menu " + (isActiveMenu ? '_active' : '')}
			ref={burger}
			onClick={handlerChange}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
