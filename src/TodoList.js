import React from 'react'
import TodoLine from './TodoLine'

export default class TodoList extends React.Component {

  filterTodos = (todo) => {
    const { filter } = this.props;
    if (filter === 'SHOW_ALL') { return true; }
    if (filter === 'SHOW_ACTIVE' && !todo.complete) { return true; }
    if (filter === 'SHOW_COMPLETED' && todo.complete) { return true; }
    return false;
  }

  render () {
    const { todos, selectTodo } = this.props;
    return (
      <div>
      {
        todos.filter(this.filterTodos).reverse().map((todo) =>
          <TodoLine
            key={todo.id}
            todo={todo}
            selectTodo={selectTodo}
          />
        )
      }
      </div>
    )
  }
}