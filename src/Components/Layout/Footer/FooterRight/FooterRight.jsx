import React from 'react';
import { Link } from 'react-router-dom';
import SpriteIcons from '../../../shared/SpriteIcons/SpriteIcons';
import './footerright.scss';

export default function FooterRight() {
	return (
		<section className='footer__right right-footer container'>
			<div>
				<ul>
					<li><a className='right-footer__phone' href="tel:88006006191">
						<svg width="18" height="18"  >
							<SpriteIcons icon="call" />
						</svg>
						&nbsp;
						8 800 600-61-91</a>
					</li>
					<li>
						<a href='https://web.telegram.org'>
							<svg width="40" height="40"  >
								<SpriteIcons icon="telegram" />
							</svg>
						</a>
						<a href='https://viber.com'>
							<svg width="40" height="40"  >
								<SpriteIcons icon="viber" />
							</svg>
						</a>
						<a href='https://whatsapp.com'>
							<svg width="40" height="40"  >
								<SpriteIcons icon="whatsapp" />
							</svg>
						</a>
					</li>
				</ul>
				<p className='right-footer__time'>Время работы: с 9:00 до 20:00 по мск</p>
				<div>
					<a className='right-footer__email' href="mail:mr.driskell@gmail.com">
						<svg width="21" height="16"  >
							<SpriteIcons icon="mail" />
						</svg>
						&nbsp;
						Mr.Driskell@gmail.com
					</a>
				</div>
			</div>



		</section>
	)
}