import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function CheackLogin(props) {
	const { isAuth } = useSelector(state => state.user);

	return (isAuth ? props.children : <Navigate to={props.redirectTo} />)
}
