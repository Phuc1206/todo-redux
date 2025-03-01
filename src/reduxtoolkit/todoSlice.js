import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
export const todoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		completedTodo: (state, action) => {
			const currentTodo = state.find((todo) => {
				todo.id === action.payload;
			});
			currentTodo.completed = !currentTodo.completed;
		},
	},
});
