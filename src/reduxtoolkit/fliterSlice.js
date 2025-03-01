import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	search: '',
	status: 'All',
	priority: '',
};
export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		search: (state, action) => {
			state.search = action.payload;
		},
		status: (state, action) => {
			state.status = action.payload;
		},
		priority: (state, action) => {
			state.priority = action.payload;
		},
	},
});
