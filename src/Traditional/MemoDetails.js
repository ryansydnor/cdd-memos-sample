import React from 'react'
import Typography from 'material-ui/Typography';
import UserDetails from './UserDetails';


const MemoDetails = ({ memo }) => {
  const { text, body, user } = memo;
  return (
    <div>
      <Typography variant="headline" component="h2">
        { text }
      </Typography>
      <br/>
      <UserDetails 
        url={user.url}
        name={user.name}
        avatarUrl={user.avatar.url}
      />
      <br/>
      <Typography component="p">
        { body }
      </Typography>
    </div>
  )  
}

export default MemoDetails;