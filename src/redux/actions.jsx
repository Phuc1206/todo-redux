const addTodoAction = (data) => {
	return {
		type: 'todoList/addTodo',
		payload: data,
	};
};
const toggleTodoAction = (data) => {
	return {
		type: 'todoList/completedTodo',
		payload: data,
	};
};
const searchFilterChange = (data) => {
	return {
		type: 'filter/search',
		payload: data,
	};
};
const statusFilterChange = (data) => {
	return {
		type: 'filter/status',
		payload: data,
	};
};
const priorityFilterChange = (data) => {
	return {
		type: 'filter/priority',
		payload: data,
	};
};
export {
	addTodoAction,
	toggleTodoAction,
	searchFilterChange,
	statusFilterChange,
	priorityFilterChange,
};
