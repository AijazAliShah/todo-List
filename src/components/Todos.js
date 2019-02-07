import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import Proptypes from "prop-types";

class Todos extends Component {
    

  render() {
    return this.props.todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    )
    );
  }
}

Todos.prototypes = {
    todos: Proptypes.array.isRequired,
    markCompleted: Proptypes.func.isRequired,
    delTodo: Proptypes.func.isRequired
}

export default Todos;
