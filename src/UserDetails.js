import React from 'react'
import { withApollo } from 'react-apollo';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { USER_FRAGMENT } from './graphql/graphql';
import './UserDetails.css';


class UserDetails extends React.Component {
  render () {
    const user = this.props.client.readFragment({
      fragment: USER_FRAGMENT,
      fragmentName: 'UserFields',
      id: `User:${this.props.userId}`
    });
    const { url, name, avatar } = user;
    return (
      <a href={url}>
        <div className="UserDetails">
          <Avatar src={avatar.url} />
          <span className="UserDetails__name">
            <FlatButton>{name}</FlatButton>
          </span>
        </div>
      </a>
    )
  }
}

export default withApollo(UserDetails)