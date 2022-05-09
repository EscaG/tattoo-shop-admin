import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../store/reducers/user-slice';

export default function Main() {
	const { isAuth } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const goLogin = () => navigate('/login');

	useEffect(() => {
		if (!isAuth) {
			setTimeout(() => {
				navigate('/login')
			}, 200)
		}
	}, [isAuth, navigate]);

	return (
		<div>
			<button onClick={() => dispatch(logOut())}>LogOut</button>
			<div>

			</div>
		</div>
	)
}
