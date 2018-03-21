import React from 'react'
import { graphql } from 'react-apollo';
import {Card, CardText} from 'material-ui/Card';
import { TODO } from './graphql/graphql';
import UserDetails from './UserDetails';


const TodoDetails = ({ data }) => {
  if (data.loading) return null;
  const { todo: { text, body, user } } = data;
  return (
    <Card expanded>
      <CardText>
        <h2>{ text }</h2>
        <UserDetails id={ user.id } />
      </CardText>
      <CardText>
        { body }
      </CardText>
    </Card>
  )  
}

export default graphql(TODO)(TodoDetails);