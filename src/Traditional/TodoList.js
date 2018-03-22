import React from 'react'
import List, {ListItem} from 'material-ui/List';
import TodoLine from './TodoLine'

const TodoList = ({ todos, selectTodo }) => (
  <List>
  {
    todos.map((todo) =>
      <ListItem button key={todo.id} onClick={() => selectTodo(todo)}>
        <TodoLine todo={todo} />
      </ListItem>
    )
  }
  </List>
);

export default TodoList;