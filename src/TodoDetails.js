import React from 'react'
import { graphql } from 'react-apollo';
import {Card, CardText} from 'material-ui/Card';
import { TODO } from './graphql/graphql';
import UserDetails from './UserDetails';


class TodoDetails extends React.Component {
  render () {
    const { data: { todo, loading } } = this.props;
    if(loading) return null;
    const { id, text, body = 'something something something', user: { id: userId } } = todo;
    return (
      <Card expanded>
        <CardText>
          <h2>{ text }</h2>
          <UserDetails userId={ userId } />
        </CardText>
        <CardText>
          { body }
        </CardText>
      </Card>
    )
  }
}



const withDetailsTodo = graphql(TODO, {
  options: ({ todoId }) => ({ variables: { id: todoId } })
});

export default withDetailsTodo(TodoDetails)