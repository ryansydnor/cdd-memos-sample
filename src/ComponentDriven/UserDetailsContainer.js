import React from 'react'
import { withApollo } from 'react-apollo';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import { USER_FRAGMENT } from '../graphql/graphql';

export const UserDetailsLayout = ({ url, name, avatar }) => (
  <a href={url} target="_blank">
    <div style={{display:'flex'}}>
      <Avatar src={avatar.url} />
      <span className="UserDetails__name">
        <Button>
          {name}
        </Button>
      </span>
    </div>
  </a>
);


const UserDetailsContainer = ({ id, client }) => {
  const user = client.readFragment({
    fragment: USER_FRAGMENT,
    fragmentName: 'UserFields',
    id: `User:${id}`
  });
  return (
    <UserDetailsLayout { ...user } />
  )
}

export default withApollo(UserDetailsContainer)