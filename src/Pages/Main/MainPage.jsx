import React from 'react';
import Filter from './Filter/Filter';
import Products from './Products/Products';
import './main.scss';

export default function MainPage() {

	return (
		<div className='main-page'>
			<div className='main-page__vertical'>

				<section className='main-page__filter'>
					<Filter />
				</section>
				<section className='main-page__products'>
					<Products />
				</section>
			</div>
		</div>
	)

}
