import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import { withApollo } from 'react-apollo';
import { TODO_FRAGMENT } from './graphql/graphql';
import './TodoLine.css';

const TodoLine = ({ id, client }) => {
  const { text } = client.readFragment({
    fragment: TODO_FRAGMENT,
    id: `Todo:${id}`
  });
  
  return (
    <div className="TodoLine">
      <div className="TodoLine__checkbox">
        { text }
      </div>
      <div className="TodoLine__details">
        <FlatButton primary label="Details" />
      </div>
    </div>
  )
}

export default withApollo(TodoLine);