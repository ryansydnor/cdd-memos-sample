import React from 'react'
import { graphql } from 'react-apollo';
import { LOGGED_IN_USER } from '../graphql/graphql';
import UserDetailsContainer from './UserDetailsContainer';

const UserContainer = ({ data }) => {
  if (data.loading) return null;
  const { loggedInUser: { id } } = data;
  return (
    <UserDetailsContainer id={id} />
  )
}

export default graphql(LOGGED_IN_USER)(UserContainer);