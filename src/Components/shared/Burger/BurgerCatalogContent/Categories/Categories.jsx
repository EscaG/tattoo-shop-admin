import React from 'react';
import { Link } from 'react-router-dom';
import './categories.scss';

export default function Categories() {
	return (
		<div className='burger-categories'>
			<ul>
				<li>
					<Link to='/'>Новинки</Link>
				</li>
				<li>
					<Link to='/'>Наборы для татуировок</Link>
				</li>
				<li>
					<Link to='/'>Тату машинки</Link>
				</li>
				<li>
					<Link to='/'>Тату краски</Link>
				</li>
				<li>
					<Link to='/'>Тату игры</Link>
				</li>
				<li>
					<Link to='/'>Тату держатели</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to='/'>Тату наконечники</Link>
				</li>
				<li>
					<Link to='/'>Блоки питания</Link>
				</li>
				<li>
					<Link to='/'>Педали и привода</Link>
				</li>
				<li>
					<Link to='/'>Аксессуары</Link>
				</li>
				<li>
					<Link to='/'>Принтеры и планшеты</Link>
				</li>
				<li>
					<Link to='/'>Защита, ёмкости, расходные материалы</Link>
				</li>
			</ul>
		</div>
	)
}
