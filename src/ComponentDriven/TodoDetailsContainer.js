import React from 'react'
import { graphql } from 'react-apollo';
import { TODO } from '../graphql/graphql';
import Typography from 'material-ui/Typography';
import UserDetailsContainer from './UserDetailsContainer';

const TodoDetailsLayout = ({ todo: { text, body, user } }) => (
  <div>
    <Typography variant="headline" component="h2">
      { text }
    </Typography>
    <br/>
    <UserDetailsContainer id={ user.id } />
    <br/>
    <Typography component="p">
      { body }
    </Typography>
  </div>  
);

const TodoDetailsContainer = (props) => {
  if (props.data.loading) return null;
  const { todo } = props.data;
  return (
    <TodoDetailsLayout todo={todo} />
  )  
}

export default graphql(TODO)(TodoDetailsContainer);