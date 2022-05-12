import React from 'react';
import './burger.scss';

export default function Burger({ isActiveMenu, setIsActiveMenu }) {

	return (
		<div
			className={"adaptive-menu__icon-menu " + (isActiveMenu ? '_active' : '')}
			onClick={() => setIsActiveMenu(!isActiveMenu)}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
