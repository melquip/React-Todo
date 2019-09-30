import React from 'react';
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
			completed: []
		}
	}
	toggleComplete = (id) => {
		return (event => {
			this.setState(currentState => ({
				todos: currentState.todos.map(todo => {
					if (todo.id !== id) return todo;
					return { ...todo, completed: !todo.completed }
				}),
				completed: [...currentState.todos, id]
			}))
		});
	}
	removeTodos = () => {
		this.setState(currentState => ({
			todos: currentState.todos.filter(todo => currentState.completed.includes(todo.id)),
			completed: []
		}))
	}
	addTodo = () => {
		this.setState(currentState => ({
			todos: [
				...currentState.todos,
				{
					id: Date.now(),
					task: currentState.todo,
					completed: false
				}
			],
			todo: ""
		}));
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
