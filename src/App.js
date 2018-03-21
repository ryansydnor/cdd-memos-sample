import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails'

import { TODOS } from './graphql/graphql';


class App extends Component {

  state = { selectedTodoId: null };

  updateView = (selectedTodoId) => {
    this.setState({ selectedTodoId });
  }

  render() {
    const { allTodos = [] } = this.props.data;
    const { selectedTodoId } = this.state;
    const todoIds = allTodos.map((x) => x.id);
    return (
      <div style={{width:'768px', margin:'0 auto'}}>
        <AppBar
          title="Component Driven Development with GraphQL and Apollo"
          iconElementLeft={ selectedTodoId ? <IconButton><ChevronLeft /></IconButton> : <div/> }
          onLeftIconButtonClick={ () => this.updateView() }
        />
        { selectedTodoId && <TodoDetails id={ selectedTodoId } /> }
        { !selectedTodoId && <TodoList todoIds={todoIds} selectTodo={this.updateView} /> }
      </div>
    );
  }
}

export default graphql(TODOS)(App);