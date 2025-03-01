const initalValue = {
	filter: {
		search: '',
		status: 'All',
		priority: '',
	},
	todoList: [],
};
const reducer = (state = initalValue, { type, payload }) => {
	console.log(state, { type, payload });
	switch (type) {
		case 'todoList/addTodo':
			return {
				...state,
				todoList: [...state.todoList, payload],
			};
		case 'todoList/completedTodo':
			return {
				...state,
				todoList: state.todoList.map((todo) => {
					return todo.id === payload
						? { ...todo, completed: !todo.completed }
						: todo;
				}),
			};
		case 'filter/search':
			return {
				...state,
				filter: {
					...state.filter,
					search: payload,
				},
			};
		case 'filter/status':
			return {
				...state,
				filter: {
					...state.filter,
					status: payload,
				},
			};
		case 'filter/priority':
			return {
				...state,
				filter: {
					...state.filter,
					priority: payload,
				},
			};
		default:
			return state;
	}
};
export default reducer;
