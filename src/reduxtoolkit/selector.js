import { createSelector } from '@reduxjs/toolkit';
const todoListSelector = (state) => state.todoList;
const filterSelector = (state) => state.filter;
export const todoSelector = createSelector(
	[todoListSelector, filterSelector],
	(todoList, filter) => {
		return todoList.filter((todo) => {
			const matchesSearch = todo.name.includes(filter.search);
			const matchesStatus =
				filter.status === 'All' ||
				(filter.status === 'Completed' && todo.completed) ||
				(filter.status === 'Todo' && !todo.completed);
			const matchesPriority =
				filter.priority === '' || todo.priority === filter.priority;

			return matchesSearch && matchesStatus && matchesPriority;
		});
	}
);
// export const todoSelector = (state) => {
// 	const remainingTodo = state.todoList.filter((todo) => {
// 		if (state.filter.status === 'All') {
// 			return todo.name.includes(state.filter.search);
// 		}
// 		return (
// 			todo.name.includes(state.filter.search) &&
// 			(state.filter.status !== 'All' && state.filter.status === 'Completed'
// 				? todo.completed
// 				: !todo.completed)
// 		);
// 	});
// 	return remainingTodo;
// };
