import React from 'react'
import Typography from 'material-ui/Typography';
import { withApollo } from 'react-apollo';
import { MEMO_FRAGMENT } from '../graphql/graphql';
import './MemoLine.css';

export const MemoLineLayout = ({ text }) => (
  <div className="MemoLine">
    <div className="MemoLine__checkbox">
      <Typography>
        { text }
      </Typography>
    </div>
  </div>
)

const MemoLineContainer = ({ id, client }) => {
  const memo = client.readFragment({
    fragment: MEMO_FRAGMENT,
    fragmentName: 'MemoFields',
    id: `Memo:${id}`
  });

  return (
    <MemoLineLayout { ...memo } />
  );
}

export default withApollo(MemoLineContainer);