import React, { Component } from 'react';

import { graphql } from 'react-apollo';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails'
import Footer from './Footer';

import {Card} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';
import FontIcon from 'material-ui/FontIcon';
import { TODOS } from './graphql/graphql';

import './App.css';

class App extends Component {

  state = {
    currentFilter: 'SHOW_ALL'
  };

  handleChange = (currentFilter, selectedTodo) => {
    console.log(currentFilter, selectedTodo);
    this.setState({ currentFilter, selectedTodo });
  }

  render() {
    const { allTodos } = this.props.data;
    const { currentFilter, selectedTodo } = this.state;
    return (
        <Card className="card" key="front">
          <div className="header">
            Todo App powered by GraphQL and React <FontIcon className="material-icons">info</FontIcon>
          </div>
          { currentFilter === "DETAIL_VIEW" &&
            <TodoDetails todoId={selectedTodo.id} />
          }
          { currentFilter !== "DETAIL_VIEW" &&
            <div>
            <AddTodo addTodo={this.props.addTodo}/>
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
            <div className="turn">
              <TodoList
                todos={allTodos || []}
                filter={currentFilter}
                selectTodo={this.handleChange}
              />
            </div>
            </div>
          }
          <Footer/>
        </Card>
    );
  }
}

export default graphql(TODOS)(App);