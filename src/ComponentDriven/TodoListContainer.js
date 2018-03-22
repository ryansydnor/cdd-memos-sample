import React from 'react'
import List, {ListItem} from 'material-ui/List';
import TodoLineContainer from './TodoLineContainer'
import { TODOS } from '../graphql/graphql';
import { graphql } from 'react-apollo';

export const TodoListLayout = ({ todoIds, selectTodo }) => {
  return (
    <List>
    {
      todoIds.map((id) =>
        <ListItem button key={id} onClick={() => selectTodo(id)}>
          <TodoLineContainer id={id} />
        </ListItem>
      )
    }
    </List>
  );
}

const TodoListContainer = (props) => {
  const { loading, allTodos } = props.data;
  if (loading) return null;
  
  const todoIds = allTodos.map((x) => x.id);
  return (
    <TodoListLayout todoIds={ todoIds } { ...props } />
  );
}

export default graphql(TODOS)(TodoListContainer);