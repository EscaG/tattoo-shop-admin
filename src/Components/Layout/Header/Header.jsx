import React, { useState } from 'react';
import useWindowSize from '../../shared/useWindowSize/useWindowSize';
import BottomHeader from './BottomHeader/BottomHeader';
import TopHeader from './TopHeader/TopHeader';
import './header.scss';

export default function Header() {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const size = useWindowSize();
	const widthXL = process.env.REACT_APP_W_XL;

	return (
		<header className='header'>
			{(size.width || 0) >= widthXL ?
				<>
					<TopHeader />
					<BottomHeader
						isActiveMenu={isActiveMenu}
						setIsActiveMenu={setIsActiveMenu}
					/>
				</>
				:
				<BottomHeader
					isActiveMenu={isActiveMenu}
					setIsActiveMenu={setIsActiveMenu}
				/>
			}
		</header>
	)
}
