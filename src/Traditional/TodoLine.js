import React from 'react'
import Typography from 'material-ui/Typography';
import './TodoLine.css';

const TodoLine = ({ todo: { text } }) => {  
  return (
    <div className="TodoLine">
      <div className="TodoLine__checkbox">
        <Typography>
          { text }
        </Typography>
      </div>
      <div className="TodoLine__details">
        <div>author circle</div>
        <div>author name</div>
      </div>
    </div>
  )
}

export default TodoLine;