import React from 'react'
import { withApollo } from 'react-apollo';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { USER_FRAGMENT } from './graphql/graphql';

const UserDetails = ({ id, client }) => {
  const { url, name, avatar } = client.readFragment({
    fragment: USER_FRAGMENT,
    fragmentName: 'UserFields',
    id: `User:${id}`
  });
  return (
    <a href={url} target="_blank">
      <div style={{display:'flex'}}>
        <Avatar src={avatar.url} />
        <span className="UserDetails__name">
          <FlatButton>{name}</FlatButton>
        </span>
      </div>
    </a>
  )
}

export default withApollo(UserDetails)