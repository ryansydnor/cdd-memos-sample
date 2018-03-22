import React from 'react'
import Typography from 'material-ui/Typography';
import { withApollo } from 'react-apollo';
import { TODO_FRAGMENT } from '../graphql/graphql';
import './TodoLine.css';

export const TodoLineLayout = ({ text }) => (
  <div className="TodoLine">
    <div className="TodoLine__checkbox">
      <Typography>
        { text }
      </Typography>
    </div>
    <div className="TodoLine__details">
      <div>author circle</div>
      <div>author name</div>
    </div>
  </div>
)

const TodoLineContainer = ({ id, client }) => {
  const todo = client.readFragment({
    fragment: TODO_FRAGMENT,
    fragmentName: 'TodoFields',
    id: `Todo:${id}`
  });

  return (
    <TodoLineLayout { ...todo } />
  );
}

export default withApollo(TodoLineContainer);