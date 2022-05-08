import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../http/index-axios";

const API_URL = process.env.REACT_APP_API_URL;

export const registration = createAsyncThunk(
	'user/registration',
	async function (newUser, { rejectWithValue }) {
		try {
			const response = await $api.post(
				`${API_URL}/registration`,
				newUser
			);
			localStorage.setItem('token', response.data.accessToken);
			return response.data.user;
			// dispatch(setUser(response.data.user));
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message);
		}
	}
)

export const login = createAsyncThunk(
	'user/login',
	async function (userLogin, { rejectWithValue }) {
		try {
			const response = await $api.post(
				`${API_URL}/login`,
				userLogin
			);
			localStorage.setItem('token', response.data.accessToken);
			return response.data.user;
			// dispatch(setUser(response.data.user));
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message);
		}
	}
)

export const checkAuth = createAsyncThunk(
	'user/checkAuth',
	async function (_, { rejectWithValue }) {
		console.log('check');
		try {
			const response = await $api.get(
				`${API_URL}/refresh`,
			);
			localStorage.setItem('token', response.data.accessToken);
			return response.data.user;
		} catch (error) {
			return rejectWithValue(error?.response?.data?.message);
		}
	}
)

