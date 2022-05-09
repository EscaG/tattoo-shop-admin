import React from 'react';
import './footer.scss';
import FooterLeft from './FooterLeft/FooterLeft';
import FooterRight from './FooterRight/FooterRight';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-container container'>

				{/* //todo первая половина футера */}
				<FooterLeft />
				{/* //todo вторая половина футера */}
				<FooterRight />
			</div>

		</footer>
	)
}
