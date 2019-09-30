import React from 'react';

export default class TodoForm extends React.Component {
	render() {
		return (
			<div className="todoform">
				<input id="todo" name="todo" type="text" value={this.props.todo} onChange={this.props.todoOnChange} />
				<button onClick={this.props.addTodo}>Add todo</button>
				<button onClick={this.props.removeTodos}>Clear completed</button>
			</div>
		);
	}
}