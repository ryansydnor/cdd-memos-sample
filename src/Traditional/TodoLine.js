import React from 'react'
import Typography from 'material-ui/Typography';
import './TodoLine.css';

const TodoLine = ({ todoText }) => {  
  return (
    <div className="TodoLine">
      <div className="TodoLine__checkbox">
        <Typography>
          { todoText }
        </Typography>
      </div>
    </div>
  )
}

export default TodoLine;