import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import { graphql } from 'react-apollo';
import { TOGGLE_TODO } from './graphql/graphql';
import './TodoLine.css';

class TodoLine extends React.Component {
  render () {
    const { toggleTodo, selectTodo, todo } = this.props;
    const { id, complete, text } = todo;
    return (
      <div className="TodoLine">
        {/*<div className="TodoLine__checkbox" onClick={ () => toggleTodo(id, !complete) }>
          <Checkbox label={text} checked={complete} />
        </div>*/}
        <div className="TodoLine__checkbox">
          { text }
        </div>
        <div className="TodoLine__details" onClick={ () => selectTodo(todo) }>
          <FlatButton primary label="Details" />
        </div>
      </div>
    )
  }
}

const withToggleTodo = graphql(TOGGLE_TODO, {
  props: ({ mutate }) => ({
    toggleTodo (id, complete) {
      return mutate({ variables: { id, complete } })
    }
  })
})

export default withToggleTodo(TodoLine)