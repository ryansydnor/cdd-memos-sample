import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails'

import { TODOS } from './graphql/graphql';


class App extends Component {

  state = { selectedTodo: { id: '1' } };

  updateView = (selectedTodo) => {
    this.setState({ selectedTodo });
  }

  render() {
    const { allTodos = [] } = this.props.data;
    const { selectedTodo } = this.state;
    return (
      <div>
        <AppBar
          title="Component Driven Development with GraphQL and Apollo"
          iconElementLeft={ selectedTodo ? <IconButton><ChevronLeft /></IconButton> : <div/> }
          onLeftIconButtonClick={ () => this.updateView() }
        />
        { selectedTodo && <TodoDetails todoId={ selectedTodo.id } /> }
        { !selectedTodo && <TodoList todos={allTodos} selectTodo={this.updateView} /> }
      </div>
    );
  }
}

export default graphql(TODOS)(App);