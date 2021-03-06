import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Autocompleter from '../../../shared/Autocompleter/Autocompleter';
import Burger from '../../../shared/Burger/Burger';
import EntityCount from '../../../shared/EntityCount/EntityCount';
import PriceFullCart from '../../../shared/PriceFullCart/PriceFullCart';
import SpriteIcons from '../../../shared/SpriteIcons/SpriteIcons';
import useWindowSize from '../../../shared/useWindowSize/useWindowSize';
import MenuList from './MenuList/MenuList';
import './bottomheader.scss';
import BurgerContent from '../../../shared/Burger/BurgetContent/BurgerContent';
import BurgerCatalogContent from '../../../shared/Burger/BurgerCatalogContent/BurgerCatalogContent';


export default function BottomHeader({ isActiveMenu, setIsActiveMenu }) {
	const [burgerRef, setBurgerRef] = useState(null)

	const size = useWindowSize();
	const widthXS = process.env.REACT_APP_W_XS;
	const widthS = process.env.REACT_APP_W_S;
	// const widthM = process.env.REACT_APP_W_M;
	const widthXL = process.env.REACT_APP_W_XL;

	const setActiveLinkCart = ({ isActive }) => ((isActive ? 'active-link ' : '') + ' cart header-icons');
	const setActiveLinkFavorite = ({ isActive }) => ((isActive ? 'active-link ' : '') + ' favorite header-icons');
	const setActiveLinkUser = ({ isActive }) => ((isActive ? 'active-link ' : '') + ' user header-icons');

	return (
		<section className='header-section-bottom'>
			<div className='header-bottom container'>

				<div className='header-bottom__menu-block'>
					<div className='menu-name' >
						{(size.width || 0) > widthXL ?
							'Каталог'
							:
							'Меню'
						}
					</div>
					<Burger
						isActiveMenu={isActiveMenu}
						setIsActiveMenu={setIsActiveMenu}
						setBurgerRef={setBurgerRef}
					/>
					{(size.width || 0) < widthXL ?
						<BurgerContent
							isActiveMenu={isActiveMenu}
							setIsActiveMenu={setIsActiveMenu}
							burgerRef={burgerRef}
						/>
						:
						<BurgerCatalogContent
							isActiveMenu={isActiveMenu}
							setIsActiveMenu={setIsActiveMenu}
							burgerRef={burgerRef}
						/>
					}
				</div>
				{(size.width || 0) > widthS ?
					<Autocompleter
						width={80}
					/>
					: null
				}
				{(size.width || 0) < widthXL ?
					<div className='header-bottom__price-block'>
						<PriceFullCart
							price={'37 280'}
						/>
						<NavLink className={setActiveLinkCart} to='/cart'>
							<svg width="20" height="20"  >
								<SpriteIcons icon="cart" />
							</svg>
							<EntityCount
								entity={'17'}
							/>
						</NavLink>
						{(size.width || 0) > widthXS ?
							<>
								<NavLink className={setActiveLinkFavorite} to='/favorite'>
									<svg width="20" height="18"  >
										<SpriteIcons icon="favorite" />
									</svg>
									<EntityCount
										entity={'1'}
									/>
								</NavLink>
								<NavLink className={setActiveLinkUser} to='/profile'>
									<svg width="19" height="19"  >
										<SpriteIcons icon="user" />
									</svg>
								</NavLink>
							</>
							:
							null
						}
					</div>
					:
					<MenuList />
				}
			</div>
		</section>
	)
}
