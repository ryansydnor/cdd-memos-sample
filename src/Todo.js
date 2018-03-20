import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import { graphql } from 'react-apollo';
import { TODOS, TOGGLE_TODO } from './graphql';

class Todo extends React.Component {

  state = {
    complete: this.props.todo.complete,
  }

  componentWillReceiveProps(nextProps) {
    this.setState((state) => {
      return {
        complete: nextProps.todo.complete,
      };
    });
  }

  updateCheck() {
    this.props.toggleTodo(this.props.todo.id, !this.state.complete)
    this.setState((state) => {
      return {
        complete: !state.complete,
      };
    });
  }

  render () {
    return ( 
      <div className="container" onClick={this.updateCheck.bind(this)}>
        <Checkbox
          label={this.props.todo.text}
          checked={this.state.complete}
        />
      </div>
    )
  }
}

const withToggleTodo = graphql(TOGGLE_TODO,{
  props: ({ ownProps, mutate }) => ({
    toggleTodo (id, complete) {
      return mutate({
        variables: { id, complete },
        update: (store, { data: { updateTodo } }) => {
          console.log('updating with response', updateTodo);
          const data = store.readQuery({ query: TODOS });
          console.log('all todos', data);
          data.allTodoes.map(t => {
            if (t.id === updateTodo.id) {
              console.log('id match');
              return {
                id: updateTodo.id,
                text: t.text,
                complete: updateTodo.complete
              }
            }
            return t;
          });
          store.writeQuery({ query: TODOS, data });
        },
      })
    },
  }),
})

export default withToggleTodo(Todo)