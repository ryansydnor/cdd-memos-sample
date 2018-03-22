import React from 'react'
import List, {ListItem} from 'material-ui/List';
import MemoLine from './MemoLine'

const MemoList = ({ memos, selectMemo }) => (
  <List>
  {
    memos.map((memo) =>
      <ListItem button key={memo.id} onClick={() => selectMemo(memo)}>
        <MemoLine
          memoText={memo.text}
          userName={memo.user.name}
          avatarUrl={memo.user.avatar.url}
        />
      </ListItem>
    )
  }
  </List>
);

export default MemoList;