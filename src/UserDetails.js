import React from 'react'
import { withApollo } from 'react-apollo';
import { USER_FRAGMENT } from './graphql/graphql';

class UserDetails extends React.Component {
  render () {
    const wat = this.props.client.readFragment({
      fragment: USER_FRAGMENT,
      id: `User:${this.props.userId}`
    });
    return (
      <div>
        user face
      </div>
    )
  }
}

export default withApollo(UserDetails)