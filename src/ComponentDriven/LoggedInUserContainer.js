import React from 'react'
import { graphql } from 'react-apollo';
import Typography from 'material-ui/Typography';
import { LOGGED_IN_USER } from '../graphql/graphql';
import UserDetailsContainer from './UserDetailsContainer';


export const LoggedInUserLayout = ({ id }) => (
  <div>
    <Typography variant="title" color="secondary">
      Welcome back,
    </Typography>
    <UserDetailsContainer id={id} />
  </div>
);

const LoggedInUserContainer = ({ data }) => {
  if (data.loading) return null;
  const { loggedInUser: { id } } = data;
  return (
    <LoggedInUserLayout id={id} />
  )
}

export default graphql(LOGGED_IN_USER)(LoggedInUserContainer);