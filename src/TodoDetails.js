import React from 'react'
import { graphql } from 'react-apollo';
import { TODO } from './graphql/graphql';

class TodoDetails extends React.Component {
  render () {
    console.log('tododetails', this.props)
    return (
      <div>
        blerg
      </div>
    )
  }
}

const withDetailsTodo = graphql(TODO, {
  options: ({ todoId }) => ({ variables: { id: todoId } })
});

export default withDetailsTodo(TodoDetails)