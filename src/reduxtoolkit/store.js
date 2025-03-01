import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './fliterSlice';
import { todoSlice } from './todoSlice';
const store = configureStore({
	reducer: {
		filter: filterSlice.reducer,
		todoList: todoSlice.reducer,
	},
});
export default store;
