import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../store/reducers/user-slice';

export default function ProfilePage() {
	// const { isAuth } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerLogOut = () => {
		dispatch(logOut());
		navigate('/login');
	}

	return (
		<div>
			<div>
				ProfilePage
			</div>
			<button onClick={handlerLogOut}>LogOut</button>
		</div>
	)
}
