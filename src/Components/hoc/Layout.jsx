import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { checkAuth } from '../../store/actions/user-action';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';

export default function Layout() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('token')) dispatch(checkAuth());
	}, [dispatch])

	useEffect(() => {
		console.log('checkAuth');
	})



	return (
		<>
			{/* //todo HEADER */}
			<Header />

			{/* //todo MAIN */}
			<main className='page'>

				{/* //todo Outlet */}
				<Outlet />
			</main>

			{/* //todo FOOTER */}
			<Footer />
		</>
	)
}
