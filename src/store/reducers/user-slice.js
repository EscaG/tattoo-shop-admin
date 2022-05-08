import { createSlice } from "@reduxjs/toolkit";
import $api from "../../http/index-axios";
import { checkAuth, login, registration } from "../actions/user-action";
const API_URL = process.env.REACT_APP_API_URL;

const setLoading = (state) => {
	state.status = 'loading';
	state.error = null;
}

const setDone = (state, action) => {
	state.status = 'resolved';
	state.user = action.payload;
	state.error = null;
	state.isAuth = true;
	console.log(action.payload);
}


const setErrors = (state, action) => {
	state.status = 'rejected';
	state.error = action.payload;
	state.isAuth = false;
}

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
		status: null,
		error: null,
		isAuth: false
	},
	reducers: {
		logOut(state) {
			$api.post(API_URL + "/logout");
			localStorage.removeItem('token');
			state.user = {};
			state.error = null;
			state.isAuth = false;
		}
	},
	extraReducers: {
		[registration.pending]: setLoading,
		[registration.fulfilled]: setDone,
		[registration.rejected]: setErrors,
		[login.pending]: setLoading,
		[login.fulfilled]: setDone,
		[login.rejected]: setErrors,
		[checkAuth.pending]: setLoading,
		[checkAuth.fulfilled]: setDone,
		[checkAuth.rejected]: setErrors,


	}
})

export const { logOut } = userSlice.actions;
export default userSlice.reducer;