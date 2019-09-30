import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
export default class TodoList extends React.Component {
	render() {
		return (
			<div className="todolist">
				<h1>Todo List</h1>
				{
					this.props.data.map(todo =>
						<Todo
							key={todo.id}
							data={todo}
							toggleComplete={this.props.toggleComplete}
						/>)
				}
			</div>
		);
	}
}