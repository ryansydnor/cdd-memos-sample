import React from 'react'
import { graphql } from 'react-apollo';
import { TODO } from './graphql/graphql';
import UserDetails from './UserDetails';

class TodoDetails extends React.Component {
  render () {
    const { onClose, data } = this.props;
    const { todo, loading } = data;
    if(loading) return null;
    const { id, text, user: { id: userId } } = todo;
    console.log('tododetails', id, text, userId);
    return (
      <div>
        <div onClick={ onClose }>X</div>
        <div>
          { text }
        </div>
        <UserDetails userId={ userId } />
      </div>
    )
  }
}



const withDetailsTodo = graphql(TODO, {
  options: ({ todoId }) => ({ variables: { id: todoId } })
});

export default withDetailsTodo(TodoDetails)