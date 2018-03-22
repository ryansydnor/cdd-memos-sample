import React from 'react'
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

const UserDetails = ({ url, name, avatarUrl }) => {
  return (
    <a href={url} target="_blank">
      <div style={{display:'flex'}}>
        <Avatar src={avatarUrl} />
        <span className="UserDetails__name">
          <Button>
            {name}
          </Button>
        </span>
      </div>
    </a>
  )
}

export default UserDetails;