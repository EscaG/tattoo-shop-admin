import React from 'react';
import './price.scss';

export default function PriceFullCart({ price }) {
	return (
		<span className='price-full-cart'>{price}&nbsp;&#8372;&nbsp;&nbsp;&nbsp; </span>
	)
}
