import React from 'react'
import {List, ListItem} from 'material-ui/List';
import TodoLine from './TodoLine'

const TodoList = ({ todoIds, selectTodo }) => (
  <List>
  {
    todoIds.map((id) =>
      <ListItem key={id} onClick={() => selectTodo(id)}>
        <TodoLine id={id} />
      </ListItem>
    )
  }
  </List>
);

export default TodoList;