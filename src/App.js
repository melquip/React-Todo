import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

export default class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor(props) {
		super(props);
		this.state = {
			todo: "",
			todos: [],
		}
	}
	toggleComplete = (id) => {
		return (event => {
			this.setState(currentState => ({
				todos: currentState.todos.map(todo => {
					if (todo.id !== id) return todo;
					return { ...todo, completed: !todo.completed }
				})
			}));
		});
	}
	removeTodos = () => {
		this.setState(currentState => ({
			todos: currentState.todos.filter(todo => !todo.completed),
		}))
	}
	addTodo = () => {
		this.setState(currentState => {
			if (!currentState.todo) return false;
			return {
				todos: [
					...currentState.todos,
					{
						id: Date.now(),
						task: currentState.todo,
						completed: false
					}
				],
				todo: ""
			}
		});
	}
	todoOnChange = (e) => {
		this.setState({
			todo: e.target.value
		});
	}
	render() {
		return (<>
			<TodoList
				data={this.state.todos}
				toggleComplete={this.toggleComplete}
			/>
			<TodoForm
				todo={this.state.todo}
				todoOnChange={this.todoOnChange}
				addTodo={this.addTodo}
				removeTodos={this.removeTodos}
			/>
		</>);
	}
}
