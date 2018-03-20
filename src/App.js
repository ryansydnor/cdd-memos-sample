import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import TodoList from './TodoList';
import TodoDetails from './TodoDetails'
import {Tabs, Tab} from 'material-ui/Tabs';
import { TODOS } from './graphql/graphql';

import './App.css';

class App extends Component {

  state = {
    currentFilter: 'SHOW_ALL'
  };

  handleChange = (currentFilter, selectedTodo) => {
    this.setState({ currentFilter, selectedTodo });
  }

  render() {
    const { allTodos } = this.props.data;
    const { currentFilter, selectedTodo } = this.state;
    return (
      <div>
        <div className="header">
          Component Driven Development with GraphQL and Apollo
        </div>
        { currentFilter === "DETAIL_VIEW" &&
          <TodoDetails
            onClose={ () => this.handleChange('SHOW_ALL', null) }
            todoId={ selectedTodo.id }
          />
        }
        { currentFilter !== "DETAIL_VIEW" &&
          <div>
            <Tabs value={this.state.value} onChange={this.handleChange}>
              <Tab
                label="All"
                value="SHOW_ALL">
              </Tab>
              <Tab
                label="Active"
                value="SHOW_ACTIVE">
              </Tab>
              <Tab
                label="Complete"
                value="SHOW_COMPLETED">
              </Tab>
            </Tabs>
            <div>
              <TodoList
                todos={allTodos || []}
                filter={currentFilter}
                selectTodo={this.handleChange}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default graphql(TODOS)(App);