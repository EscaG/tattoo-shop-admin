import React, { useState } from 'react';
import Accordion from '../../../Components/shared/Accordion/Accordion';
import './filter.scss';

export default function Filter() {
	const [isOpen, setIsOpen] = useState(false)

	function handleChangeCheckbox(e) {

	}

	return (
		<div>
			<Accordion
				title={"Категории"}
				isOpen={isOpen}
				handleClick={setIsOpen}
			>
				<ul>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Все</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Новинки</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Наборы для татуировок</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Тату машинки</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Тату краски</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Тату иглы</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Тату держатели</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Тату наконечники</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Блоки питания</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Педали и провода</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Аксессуары</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Принтеры и планшеты</label>
					</li>
					<li>
						<input
							onChange={handleChangeCheckbox}
							type="checkbox" name="" id="" />
						<label htmlFor="">Защита, ёмкости, расходные материалы</label>
					</li>

				</ul>
			</Accordion>

		</div>
	)
}
