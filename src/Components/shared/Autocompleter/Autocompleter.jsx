import React from 'react';
import SpriteIcons from '../SpriteIcons/SpriteIcons';
import './autocompleter.scss';

export default function Autocompleter() {
	return (
		<div className='autocompleter'>
			<svg className='search-icon' width="19" height="19"  >
				<SpriteIcons icon="search" />
			</svg>
			<input className='autocompleter__input' type="text" placeholder='Поиск' />
		</div>
	)
}
