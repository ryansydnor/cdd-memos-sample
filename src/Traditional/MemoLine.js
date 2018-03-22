import React from 'react'
import Typography from 'material-ui/Typography';
import './MemoLine.css';

const MemoLine = ({ memoText, userName, avatarUrl }) => {
  return (
    <div className="MemoLine">
      <div className="MemoLine__checkbox">
        <Typography>
          { memoText }
        </Typography>
      </div>
      <div className="MemoLine__details">
        <span>{userName}</span>
        <img src={avatarUrl} height="30" width="30"/>
      </div>
    </div>
  )
}

export default MemoLine;