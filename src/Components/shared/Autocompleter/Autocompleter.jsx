import React from 'react';
import SpriteIcons from '../SpriteIcons/SpriteIcons';
import './autocompleter.scss';

export default function Autocompleter({ width }) {

	const searchParametr = () => {
		return (100 - width) / 2;
	}

	return (
		<div className='autocompleter'>
			<svg className='search-icon'
				style={{ left: `calc(${searchParametr()}% + 20px)` }}
				width="19" height="19"
			>
				<SpriteIcons icon="search" />
			</svg>
			<input className='autocompleter__input'
				style={{ width: `${width}%` }}
				type="text"
				placeholder='Поиск'
			/>
		</div>
	)
}
