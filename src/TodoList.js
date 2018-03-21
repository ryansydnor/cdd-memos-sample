import React from 'react'
import {List, ListItem} from 'material-ui/List';
import TodoLine from './TodoLine'

export default class TodoList extends React.Component {

  render () {
    const { todos, selectTodo } = this.props;
    return (
      <List>
      {
        todos.map((todo) =>
          <ListItem>
            <TodoLine key={todo.id} todo={todo} selectTodo={selectTodo} />
          </ListItem>
        )
      }
      </List>
    )
  }
}