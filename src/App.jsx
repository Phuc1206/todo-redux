import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import {
// 	addTodoAction,
// 	toggleTodoAction,
// 	searchFilterChange,
// 	statusFilterChange,
// 	priorityFilterChange,
// } from './redux/actions';
import { filterSlice } from './reduxtoolkit/fliterSlice';
import { todoSlice } from './reduxtoolkit/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoSelector } from './reduxtoolkit/selector';
// import { todoSelector } from './redux/selector';
function App() {
	const todoList = useSelector(todoSelector);
	// const searchText = useSelector((state)=> state.filter.search)
	const [name, setName] = useState('');
	const [priority, setPriority] = useState('Medium');
	const [filterSearch, setFilterSearch] = useState('');
	const [filterStatus, setFilterStatus] = useState('All');
	const [priorityFilter, setPriorityFilter] = useState('');
	// const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	const hanldeAddTodo = (e) => {
		e.preventDefault();
		if (name.trim() === '') return;
		dispatch(
			todoSlice.actions.addTodo({
				id: uuidv4(),
				name: name,
				priority: priority,
				completed: false,
			})
		);
		setName('');
		setPriority('Medium');
	};
	const handleSearchFilter = (e) => {
		setFilterSearch(e.target.value);
		dispatch(filterSlice.actions.search(e.target.value));
	};
	const handleChangePriority = (e) => {
		setPriority(e.target.value);
	};
	const handleChecked = (e) => {
		setFilterStatus(e.target.value);
		dispatch(filterSlice.actions.status(e.target.value));
	};
	const handleCheckedTodo = (id) => {
		dispatch(todoSlice.actions.completedTodo(id));
	};
	const handleChangePriorityFilter = (e) => {
		dispatch(filterSlice.actions.priority(e.target.value));
		setPriorityFilter(e.target.value);
	};

	return (
		<form className='form-container'>
			<h1>TO DO APP</h1>
			<div className='wrapper-search'>
				<label htmlFor='search' className='label-search'>
					Search
				</label>
				<input
					placeholder='search'
					id='search'
					name='search'
					value={filterSearch}
					onChange={handleSearchFilter}
				></input>
			</div>
			<p>Filter by status</p>

			<p className='wrapper-checkbox'>
				<input
					type='radio'
					id='all'
					name='all'
					value='All'
					checked={filterStatus === 'All'}
					onChange={handleChecked}
				></input>
				<label htmlFor='all'>All</label>
				<input
					type='radio'
					id='completed'
					name='completed'
					value='Completed'
					checked={filterStatus === 'Completed'}
					onChange={handleChecked}
				></input>
				<label htmlFor='completed'>Completed</label>
				<input
					type='radio'
					id='to-do'
					name='to-do'
					value='Todo'
					checked={filterStatus === 'Todo'}
					onChange={handleChecked}
				></input>
				<label htmlFor='to-do'>To do</label>
			</p>
			<p>Filter by priority</p>
			<select
				id='priority'
				name='priority'
				value={priorityFilter}
				onChange={handleChangePriorityFilter}
			>
				<option value=''></option>
				<option value='Low'>Low</option>
				<option value='Medium'>Medium</option>
				<option value='High'>High</option>
			</select>
			<hr />
			<ul>
				{todoList.map((value) => (
					<li key={value.id} className='list-todo'>
						<input
							type='checkbox'
							id={`todo-${value.id}`}
							checked={value.completed}
							onChange={() => {
								handleCheckedTodo(value.id);
							}}
						></input>
						<label htmlFor={`todo-${value.id}`}>{value.name}</label>
						<span>{value.priority}</span>
					</li>
				))}
			</ul>

			<p className='wrapper-add'>
				<input
					type='text'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				></input>
				<select
					id='priority'
					name='priority'
					value={priority}
					onChange={handleChangePriority}
				>
					<option value='Low'>Low</option>
					<option value='Medium'>Medium</option>
					<option value='High'>High</option>
				</select>
				<button onClick={hanldeAddTodo}>Add</button>
			</p>
		</form>
	);
}

export default App;
