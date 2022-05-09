import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, registration } from '../../store/actions/user-action';
import { logOut } from '../../store/reducers/user-slice';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { status, error, user, isAuth } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const goMain = () => navigate('/');

	useEffect(() => {
		if (isAuth) { navigate('/') }
	}, [isAuth, navigate]);

	// let goNav = useCallback(
	// 	() => {
	// 		if (isAuth) { goMain() }
	// 	},
	// 	[goMain, isAuth],
	// )
	// goNav()


	const userRegistration = () => {
		dispatch(registration({ email, password }));
	}
	const userLogin = () => {
		dispatch(login({ email, password }));
	}


	return (
		<section>
			<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button onClick={userRegistration} > Registration</button >
			<button onClick={userLogin}>LogIn</button>
			<button onClick={() => dispatch(logOut())}>LogOut</button>
			<br />
			{status}
			<br />
			{error}
			<br />
			{user?.email && user.email}
			{user?.id && user.id}

			<br />
			{isAuth ? "true" : "false"}
		</section>
	)
}
