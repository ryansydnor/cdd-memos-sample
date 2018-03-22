import React from 'react'
import List, {ListItem} from 'material-ui/List';
import MemoLineContainer from './MemoLineContainer'
import { MEMOS } from '../graphql/graphql';
import { graphql } from 'react-apollo';

export const MemoListLayout = ({ memoIds, selectMemo }) => {
  return (
    <List>
    {
      memoIds.map((id) =>
        <ListItem button key={id} onClick={() => selectMemo(id)}>
          <MemoLineContainer id={id} />
        </ListItem>
      )
    }
    </List>
  );
}

const MemoListContainer = (props) => {
  const { loading, allMemos } = props.data;
  if (loading) return null;
  
  const memoIds = allMemos.map((x) => x.id);
  return (
    <MemoListLayout memoIds={ memoIds } { ...props } />
  );
}

export default graphql(MEMOS)(MemoListContainer);