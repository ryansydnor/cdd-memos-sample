import React from 'react'
import { graphql } from 'react-apollo';
import { MEMO } from '../graphql/graphql';
import Typography from 'material-ui/Typography';
import UserDetailsContainer from './UserDetailsContainer';

const MemoDetailsLayout = ({ memo: { text, body, user } }) => (
  <div>
    <Typography variant="headline" component="h2">
      { text }
    </Typography>
    <br/>
    <UserDetailsContainer id={ user.id } />
    <br/>
    <Typography component="p">
      { body }
    </Typography>
  </div>  
);

const MemoDetailsContainer = (props) => {
  if (props.data.loading) return null;
  const { memo } = props.data;
  console.log(props);
  return (
    <MemoDetailsLayout memo={memo} />
  )  
}

export default graphql(MEMO)(MemoDetailsContainer);